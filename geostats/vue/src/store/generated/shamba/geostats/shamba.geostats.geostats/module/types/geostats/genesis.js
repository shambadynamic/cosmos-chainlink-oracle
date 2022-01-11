/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../geostats/params";
import { Data } from "../geostats/data";
export const protobufPackage = "shamba.geostats.geostats";
const baseGenesisState = { dataCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.dataList) {
            Data.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.dataCount !== 0) {
            writer.uint32(24).uint64(message.dataCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.dataList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.dataList.push(Data.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.dataCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.dataList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.dataList !== undefined && object.dataList !== null) {
            for (const e of object.dataList) {
                message.dataList.push(Data.fromJSON(e));
            }
        }
        if (object.dataCount !== undefined && object.dataCount !== null) {
            message.dataCount = Number(object.dataCount);
        }
        else {
            message.dataCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.dataList) {
            obj.dataList = message.dataList.map((e) => e ? Data.toJSON(e) : undefined);
        }
        else {
            obj.dataList = [];
        }
        message.dataCount !== undefined && (obj.dataCount = message.dataCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.dataList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.dataList !== undefined && object.dataList !== null) {
            for (const e of object.dataList) {
                message.dataList.push(Data.fromPartial(e));
            }
        }
        if (object.dataCount !== undefined && object.dataCount !== null) {
            message.dataCount = object.dataCount;
        }
        else {
            message.dataCount = 0;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
