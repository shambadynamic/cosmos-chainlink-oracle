import { Writer, Reader } from "protobufjs/minimal";
import { Params } from "../geostats/params";
import { Data } from "../geostats/data";
export declare const protobufPackage = "shamba.geostats.geostats";
/** GenesisState defines the geostats module's genesis state. */
export interface GenesisState {
    params: Params | undefined;
    dataList: Data[];
    /** this line is used by starport scaffolding # genesis/proto/state */
    dataCount: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
