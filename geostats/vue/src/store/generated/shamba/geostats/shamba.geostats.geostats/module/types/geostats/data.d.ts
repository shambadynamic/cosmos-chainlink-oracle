import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "shamba.geostats.geostats";
export interface Data {
    id: number;
    requester: string;
    aggX: string;
    datasetCode: string;
    selectedBand: string;
    imageScale: string;
    startDate: string;
    endDate: string;
    creator: string;
}
export declare const Data: {
    encode(message: Data, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Data;
    fromJSON(object: any): Data;
    toJSON(message: Data): unknown;
    fromPartial(object: DeepPartial<Data>): Data;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
