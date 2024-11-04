// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file nillion/compute/v1/retrieve.proto (package nillion.compute.v1.retrieve, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Empty } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file nillion/compute/v1/retrieve.proto.
 */
export const file_nillion_compute_v1_retrieve: GenFile = /*@__PURE__*/
  fileDesc("CiFuaWxsaW9uL2NvbXB1dGUvdjEvcmV0cmlldmUucHJvdG8SG25pbGxpb24uY29tcHV0ZS52MS5yZXRyaWV2ZSIsChZSZXRyaWV2ZVJlc3VsdHNSZXF1ZXN0EhIKCmNvbXB1dGVfaWQYASABKAwirQEKF1JldHJpZXZlUmVzdWx0c1Jlc3BvbnNlEjUKE3dhaXRpbmdfY29tcHV0YXRpb24YASABKAsyFi5nb29nbGUucHJvdG9idWYuRW1wdHlIABJBCgdzdWNjZXNzGAIgASgLMi4ubmlsbGlvbi5jb21wdXRlLnYxLnJldHJpZXZlLkNvbXB1dGF0aW9uUmVzdWx0SAASDwoFZXJyb3IYAyABKAlIAEIHCgVzdGF0ZSIrChFDb21wdXRhdGlvblJlc3VsdBIWCg5iaW5jb2RlX3ZhbHVlcxgBIAEoDELAAQofY29tLm5pbGxpb24uY29tcHV0ZS52MS5yZXRyaWV2ZUINUmV0cmlldmVQcm90b1ABogIETkNWUqoCG05pbGxpb24uQ29tcHV0ZS5WMS5SZXRyaWV2ZcoCG05pbGxpb25cQ29tcHV0ZVxWMVxSZXRyaWV2ZeICJ05pbGxpb25cQ29tcHV0ZVxWMVxSZXRyaWV2ZVxHUEJNZXRhZGF0YeoCHk5pbGxpb246OkNvbXB1dGU6OlYxOjpSZXRyaWV2ZWIGcHJvdG8z", [file_google_protobuf_empty]);

/**
 * A request to retrieve the results of a computation.
 *
 * @generated from message nillion.compute.v1.retrieve.RetrieveResultsRequest
 */
export type RetrieveResultsRequest = Message<"nillion.compute.v1.retrieve.RetrieveResultsRequest"> & {
  /**
   * The instance of the computation to retrieve results for.
   *
   * @generated from field: bytes compute_id = 1;
   */
  computeId: Uint8Array;
};

/**
 * Describes the message nillion.compute.v1.retrieve.RetrieveResultsRequest.
 * Use `create(RetrieveResultsRequestSchema)` to create a new message.
 */
export const RetrieveResultsRequestSchema: GenMessage<RetrieveResultsRequest> = /*@__PURE__*/
  messageDesc(file_nillion_compute_v1_retrieve, 0);

/**
 * The response to a request to retrieve the results of a computation.
 *
 * @generated from message nillion.compute.v1.retrieve.RetrieveResultsResponse
 */
export type RetrieveResultsResponse = Message<"nillion.compute.v1.retrieve.RetrieveResultsResponse"> & {
  /**
   * @generated from oneof nillion.compute.v1.retrieve.RetrieveResultsResponse.state
   */
  state: {
    /**
     * The node is waiting for the computation to end.
     *
     * This message may be sent 0+ times in a row until a `result` is sent.
     *
     * @generated from field: google.protobuf.Empty waiting_computation = 1;
     */
    value: Empty;
    case: "waitingComputation";
  } | {
    /**
     * The computation finished successfully and yielded these results.
     *
     * @generated from field: nillion.compute.v1.retrieve.ComputationResult success = 2;
     */
    value: ComputationResult;
    case: "success";
  } | {
    /**
     * The error message if any.
     *
     * @generated from field: string error = 3;
     */
    value: string;
    case: "error";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message nillion.compute.v1.retrieve.RetrieveResultsResponse.
 * Use `create(RetrieveResultsResponseSchema)` to create a new message.
 */
export const RetrieveResultsResponseSchema: GenMessage<RetrieveResultsResponse> = /*@__PURE__*/
  messageDesc(file_nillion_compute_v1_retrieve, 1);

/**
 * The result of a computation.
 *
 * @generated from message nillion.compute.v1.retrieve.ComputationResult
 */
export type ComputationResult = Message<"nillion.compute.v1.retrieve.ComputationResult"> & {
  /**
   * The computation results, encoded in bincode.
   *
   * @generated from field: bytes bincode_values = 1;
   */
  bincodeValues: Uint8Array;
};

/**
 * Describes the message nillion.compute.v1.retrieve.ComputationResult.
 * Use `create(ComputationResultSchema)` to create a new message.
 */
export const ComputationResultSchema: GenMessage<ComputationResult> = /*@__PURE__*/
  messageDesc(file_nillion_compute_v1_retrieve, 2);
