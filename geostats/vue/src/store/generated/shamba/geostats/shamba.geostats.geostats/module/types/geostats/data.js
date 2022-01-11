/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "shamba.geostats.geostats";
const baseData = {
    id: 0,
    requester: "",
    aggX: "",
    datasetCode: "",
    selectedBand: "",
    imageScale: "",
    startDate: "",
    endDate: "",
    creator: "",
};
export const Data = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.requester !== "") {
            writer.uint32(18).string(message.requester);
        }
        if (message.aggX !== "") {
            writer.uint32(26).string(message.aggX);
        }
        if (message.datasetCode !== "") {
            writer.uint32(34).string(message.datasetCode);
        }
        if (message.selectedBand !== "") {
            writer.uint32(42).string(message.selectedBand);
        }
        if (message.imageScale !== "") {
            writer.uint32(50).string(message.imageScale);
        }
        if (message.startDate !== "") {
            writer.uint32(58).string(message.startDate);
        }
        if (message.endDate !== "") {
            writer.uint32(66).string(message.endDate);
        }
        if (message.creator !== "") {
            writer.uint32(74).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.requester = reader.string();
                    break;
                case 3:
                    message.aggX = reader.string();
                    break;
                case 4:
                    message.datasetCode = reader.string();
                    break;
                case 5:
                    message.selectedBand = reader.string();
                    break;
                case 6:
                    message.imageScale = reader.string();
                    break;
                case 7:
                    message.startDate = reader.string();
                    break;
                case 8:
                    message.endDate = reader.string();
                    break;
                case 9:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseData };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.requester !== undefined && object.requester !== null) {
            message.requester = String(object.requester);
        }
        else {
            message.requester = "";
        }
        if (object.aggX !== undefined && object.aggX !== null) {
            message.aggX = String(object.aggX);
        }
        else {
            message.aggX = "";
        }
        if (object.datasetCode !== undefined && object.datasetCode !== null) {
            message.datasetCode = String(object.datasetCode);
        }
        else {
            message.datasetCode = "";
        }
        if (object.selectedBand !== undefined && object.selectedBand !== null) {
            message.selectedBand = String(object.selectedBand);
        }
        else {
            message.selectedBand = "";
        }
        if (object.imageScale !== undefined && object.imageScale !== null) {
            message.imageScale = String(object.imageScale);
        }
        else {
            message.imageScale = "";
        }
        if (object.startDate !== undefined && object.startDate !== null) {
            message.startDate = String(object.startDate);
        }
        else {
            message.startDate = "";
        }
        if (object.endDate !== undefined && object.endDate !== null) {
            message.endDate = String(object.endDate);
        }
        else {
            message.endDate = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.requester !== undefined && (obj.requester = message.requester);
        message.aggX !== undefined && (obj.aggX = message.aggX);
        message.datasetCode !== undefined &&
            (obj.datasetCode = message.datasetCode);
        message.selectedBand !== undefined &&
            (obj.selectedBand = message.selectedBand);
        message.imageScale !== undefined && (obj.imageScale = message.imageScale);
        message.startDate !== undefined && (obj.startDate = message.startDate);
        message.endDate !== undefined && (obj.endDate = message.endDate);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseData };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.requester !== undefined && object.requester !== null) {
            message.requester = object.requester;
        }
        else {
            message.requester = "";
        }
        if (object.aggX !== undefined && object.aggX !== null) {
            message.aggX = object.aggX;
        }
        else {
            message.aggX = "";
        }
        if (object.datasetCode !== undefined && object.datasetCode !== null) {
            message.datasetCode = object.datasetCode;
        }
        else {
            message.datasetCode = "";
        }
        if (object.selectedBand !== undefined && object.selectedBand !== null) {
            message.selectedBand = object.selectedBand;
        }
        else {
            message.selectedBand = "";
        }
        if (object.imageScale !== undefined && object.imageScale !== null) {
            message.imageScale = object.imageScale;
        }
        else {
            message.imageScale = "";
        }
        if (object.startDate !== undefined && object.startDate !== null) {
            message.startDate = object.startDate;
        }
        else {
            message.startDate = "";
        }
        if (object.endDate !== undefined && object.endDate !== null) {
            message.endDate = object.endDate;
        }
        else {
            message.endDate = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
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
