// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file nillion/membership/v1/service.proto (package nillion.membership.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { EmptySchema } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty } from "@bufbuild/protobuf/wkt";
import type { ClusterSchema } from "./cluster_pb";
import { file_nillion_membership_v1_cluster } from "./cluster_pb";

/**
 * Describes the file nillion/membership/v1/service.proto.
 */
export const file_nillion_membership_v1_service: GenFile = /*@__PURE__*/
  fileDesc("CiNuaWxsaW9uL21lbWJlcnNoaXAvdjEvc2VydmljZS5wcm90bxIVbmlsbGlvbi5tZW1iZXJzaGlwLnYxMlcKCk1lbWJlcnNoaXASSQoHQ2x1c3RlchIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRomLm5pbGxpb24ubWVtYmVyc2hpcC52MS5jbHVzdGVyLkNsdXN0ZXJCnwEKGWNvbS5uaWxsaW9uLm1lbWJlcnNoaXAudjFCDFNlcnZpY2VQcm90b1ABogIDTk1YqgIVTmlsbGlvbi5NZW1iZXJzaGlwLlYxygIVTmlsbGlvblxNZW1iZXJzaGlwXFYx4gIhTmlsbGlvblxNZW1iZXJzaGlwXFYxXEdQQk1ldGFkYXRh6gIXTmlsbGlvbjo6TWVtYmVyc2hpcDo6VjFiBnByb3RvMw", [file_google_protobuf_empty, file_nillion_membership_v1_cluster]);

/**
 * Exposes information about a node's membership.
 *
 * @generated from service nillion.membership.v1.Membership
 */
export const Membership: GenService<{
  /**
   * Get the definition of the cluster the node queried is part of.
   *
   * @generated from rpc nillion.membership.v1.Membership.Cluster
   */
  cluster: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof ClusterSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_nillion_membership_v1_service, 0);
