import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../geostats/params";
import { Data } from "../geostats/data";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "shamba.geostats.geostats";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetDataRequest {
    id: number;
}
export interface QueryGetDataResponse {
    Data: Data | undefined;
}
export interface QueryAllDataRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllDataResponse {
    Data: Data[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetDataRequest: {
    encode(message: QueryGetDataRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDataRequest;
    fromJSON(object: any): QueryGetDataRequest;
    toJSON(message: QueryGetDataRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetDataRequest>): QueryGetDataRequest;
};
export declare const QueryGetDataResponse: {
    encode(message: QueryGetDataResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDataResponse;
    fromJSON(object: any): QueryGetDataResponse;
    toJSON(message: QueryGetDataResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetDataResponse>): QueryGetDataResponse;
};
export declare const QueryAllDataRequest: {
    encode(message: QueryAllDataRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDataRequest;
    fromJSON(object: any): QueryAllDataRequest;
    toJSON(message: QueryAllDataRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllDataRequest>): QueryAllDataRequest;
};
export declare const QueryAllDataResponse: {
    encode(message: QueryAllDataResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDataResponse;
    fromJSON(object: any): QueryAllDataResponse;
    toJSON(message: QueryAllDataResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllDataResponse>): QueryAllDataResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Data by id. */
    Data(request: QueryGetDataRequest): Promise<QueryGetDataResponse>;
    /** Queries a list of Data items. */
    DataAll(request: QueryAllDataRequest): Promise<QueryAllDataResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Data(request: QueryGetDataRequest): Promise<QueryGetDataResponse>;
    DataAll(request: QueryAllDataRequest): Promise<QueryAllDataResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
