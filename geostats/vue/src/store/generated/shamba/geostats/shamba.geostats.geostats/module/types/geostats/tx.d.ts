import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "shamba.geostats.geostats";
export interface MsgCreateData {
    creator: string;
    requester: string;
    aggX: string;
    datasetCode: string;
    selectedBand: string;
    imageScale: string;
    startDate: string;
    endDate: string;
}
export interface MsgCreateDataResponse {
    id: number;
}
export interface MsgUpdateData {
    creator: string;
    id: number;
    requester: string;
    aggX: string;
    datasetCode: string;
    selectedBand: string;
    imageScale: string;
    startDate: string;
    endDate: string;
}
export interface MsgUpdateDataResponse {
}
export interface MsgDeleteData {
    creator: string;
    id: number;
}
export interface MsgDeleteDataResponse {
}
export declare const MsgCreateData: {
    encode(message: MsgCreateData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateData;
    fromJSON(object: any): MsgCreateData;
    toJSON(message: MsgCreateData): unknown;
    fromPartial(object: DeepPartial<MsgCreateData>): MsgCreateData;
};
export declare const MsgCreateDataResponse: {
    encode(message: MsgCreateDataResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDataResponse;
    fromJSON(object: any): MsgCreateDataResponse;
    toJSON(message: MsgCreateDataResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateDataResponse>): MsgCreateDataResponse;
};
export declare const MsgUpdateData: {
    encode(message: MsgUpdateData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateData;
    fromJSON(object: any): MsgUpdateData;
    toJSON(message: MsgUpdateData): unknown;
    fromPartial(object: DeepPartial<MsgUpdateData>): MsgUpdateData;
};
export declare const MsgUpdateDataResponse: {
    encode(_: MsgUpdateDataResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDataResponse;
    fromJSON(_: any): MsgUpdateDataResponse;
    toJSON(_: MsgUpdateDataResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateDataResponse>): MsgUpdateDataResponse;
};
export declare const MsgDeleteData: {
    encode(message: MsgDeleteData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteData;
    fromJSON(object: any): MsgDeleteData;
    toJSON(message: MsgDeleteData): unknown;
    fromPartial(object: DeepPartial<MsgDeleteData>): MsgDeleteData;
};
export declare const MsgDeleteDataResponse: {
    encode(_: MsgDeleteDataResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteDataResponse;
    fromJSON(_: any): MsgDeleteDataResponse;
    toJSON(_: MsgDeleteDataResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteDataResponse>): MsgDeleteDataResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateData(request: MsgCreateData): Promise<MsgCreateDataResponse>;
    UpdateData(request: MsgUpdateData): Promise<MsgUpdateDataResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteData(request: MsgDeleteData): Promise<MsgDeleteDataResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateData(request: MsgCreateData): Promise<MsgCreateDataResponse>;
    UpdateData(request: MsgUpdateData): Promise<MsgUpdateDataResponse>;
    DeleteData(request: MsgDeleteData): Promise<MsgDeleteDataResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
