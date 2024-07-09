import { DirectSecp256k1Wallet, OfflineSigner } from "@cosmjs/proto-signing";
import {
  ChainId,
  NilChainAddressPrefix,
  PaymentReceipt,
  PrivateKeyBase16,
  Url,
} from "@nillion/types";
import { Keplr, Window as KeplrWindow } from "@keplr-wallet/types";
import { Log } from "./logger";
import { NilVmClient, Operation } from "@nillion/core";
import { NilChainPaymentClient } from "./client";

export type FetchQuoteThenPayThenExecuteArgs = {
  nilvm: NilVmClient;
  nilchain: NilChainPaymentClient;
  operation: Operation;
} & Record<string, unknown>;

export type FetchQuoteThenPayThenExecuteResult = {
  quote: unknown;
  receipt: PaymentReceipt;
  result: unknown;
};

export const fetchQuoteThenPayThenExecute = async (
  args: FetchQuoteThenPayThenExecuteArgs,
): Promise<FetchQuoteThenPayThenExecuteResult> => {
  const { nilvm, nilchain, operation, ...rest } = args;
  const quote = await nilvm.fetchQuote(operation);
  const hash = await nilchain.pay(quote);
  const receipt = PaymentReceipt.parse({ quote, hash, wasm: quote.inner });

  const result = await nilvm.execute({
    operation,
    receipt,
    ...rest,
  });

  return {
    quote,
    receipt,
    result,
  };
};

// expected base16, 64 chars long
export const createSignerFromKey = async (
  key: PrivateKeyBase16,
): Promise<OfflineSigner> => {
  const privateKey = new Uint8Array(key.length / 2);

  for (let i = 0, j = 0; i < key.length; i += 2, j++) {
    privateKey[j] = parseInt(key.slice(i, i + 2), 16);
  }

  return await DirectSecp256k1Wallet.fromKey(privateKey, NilChainAddressPrefix);
};

export const createClientWithDirectSecp256k1Wallet = async (args: {
  endpoint: Url;
  key: PrivateKeyBase16;
}): Promise<NilChainPaymentClient> => {
  const { endpoint, key } = args;
  const signer = await createSignerFromKey(key);
  return await NilChainPaymentClient.create(endpoint, signer);
};

export const createClientWithKeplrWallet = async (args: {
  chainId: ChainId;
  endpoint: Url;
}): Promise<NilChainPaymentClient> => {
  if (!window.keplr) {
    Log.log("failed to access window.keplr");
    return Promise.reject("failed to access window.keplr");
  } else {
    const { keplr } = window;
    const { chainId, endpoint } = args;
    await keplr.enable(chainId);
    const signer = keplr.getOfflineSigner(chainId);
    return await NilChainPaymentClient.create(endpoint, signer);
  }
};

declare global {
  interface Window extends KeplrWindow {}
}

export const getKeplr = async (): Promise<Keplr | undefined> => {
  if (window.keplr) {
    return window.keplr;
  }

  if (document.readyState === "complete") {
    return window.keplr;
  }

  return new Promise((resolve) => {
    const documentStateChange = (event: Event) => {
      if (
        event.target &&
        (event.target as Document).readyState === "complete"
      ) {
        resolve(window.keplr);
        document.removeEventListener("readystatechange", documentStateChange);
      }
    };

    document.addEventListener("readystatechange", documentStateChange);
  });
};
