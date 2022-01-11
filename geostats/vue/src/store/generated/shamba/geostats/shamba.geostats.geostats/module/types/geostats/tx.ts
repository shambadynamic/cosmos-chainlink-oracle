/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "shamba.geostats.geostats";

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

export interface MsgUpdateDataResponse {}

export interface MsgDeleteData {
  creator: string;
  id: number;
}

export interface MsgDeleteDataResponse {}

const baseMsgCreateData: object = {
  creator: "",
  requester: "",
  aggX: "",
  datasetCode: "",
  selectedBand: "",
  imageScale: "",
  startDate: "",
  endDate: "",
};

export const MsgCreateData = {
  encode(message: MsgCreateData, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateData } as MsgCreateData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateData {
    const message = { ...baseMsgCreateData } as MsgCreateData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.requester !== undefined && object.requester !== null) {
      message.requester = String(object.requester);
    } else {
      message.requester = "";
    }
    if (object.aggX !== undefined && object.aggX !== null) {
      message.aggX = String(object.aggX);
    } else {
      message.aggX = "";
    }
    if (object.datasetCode !== undefined && object.datasetCode !== null) {
      message.datasetCode = String(object.datasetCode);
    } else {
      message.datasetCode = "";
    }
    if (object.selectedBand !== undefined && object.selectedBand !== null) {
      message.selectedBand = String(object.selectedBand);
    } else {
      message.selectedBand = "";
    }
    if (object.imageScale !== undefined && object.imageScale !== null) {
      message.imageScale = String(object.imageScale);
    } else {
      message.imageScale = "";
    }
    if (object.startDate !== undefined && object.startDate !== null) {
      message.startDate = String(object.startDate);
    } else {
      message.startDate = "";
    }
    if (object.endDate !== undefined && object.endDate !== null) {
      message.endDate = String(object.endDate);
    } else {
      message.endDate = "";
    }
    return message;
  },

  toJSON(message: MsgCreateData): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.requester !== undefined && (obj.requester = message.requester);
    message.aggX !== undefined && (obj.aggX = message.aggX);
    message.datasetCode !== undefined &&
      (obj.datasetCode = message.datasetCode);
    message.selectedBand !== undefined &&
      (obj.selectedBand = message.selectedBand);
    message.imageScale !== undefined && (obj.imageScale = message.imageScale);
    message.startDate !== undefined && (obj.startDate = message.startDate);
    message.endDate !== undefined && (obj.endDate = message.endDate);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateData>): MsgCreateData {
    const message = { ...baseMsgCreateData } as MsgCreateData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.requester !== undefined && object.requester !== null) {
      message.requester = object.requester;
    } else {
      message.requester = "";
    }
    if (object.aggX !== undefined && object.aggX !== null) {
      message.aggX = object.aggX;
    } else {
      message.aggX = "";
    }
    if (object.datasetCode !== undefined && object.datasetCode !== null) {
      message.datasetCode = object.datasetCode;
    } else {
      message.datasetCode = "";
    }
    if (object.selectedBand !== undefined && object.selectedBand !== null) {
      message.selectedBand = object.selectedBand;
    } else {
      message.selectedBand = "";
    }
    if (object.imageScale !== undefined && object.imageScale !== null) {
      message.imageScale = object.imageScale;
    } else {
      message.imageScale = "";
    }
    if (object.startDate !== undefined && object.startDate !== null) {
      message.startDate = object.startDate;
    } else {
      message.startDate = "";
    }
    if (object.endDate !== undefined && object.endDate !== null) {
      message.endDate = object.endDate;
    } else {
      message.endDate = "";
    }
    return message;
  },
};

const baseMsgCreateDataResponse: object = { id: 0 };

export const MsgCreateDataResponse = {
  encode(
    message: MsgCreateDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateDataResponse } as MsgCreateDataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDataResponse {
    const message = { ...baseMsgCreateDataResponse } as MsgCreateDataResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateDataResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDataResponse>
  ): MsgCreateDataResponse {
    const message = { ...baseMsgCreateDataResponse } as MsgCreateDataResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateData: object = {
  creator: "",
  id: 0,
  requester: "",
  aggX: "",
  datasetCode: "",
  selectedBand: "",
  imageScale: "",
  startDate: "",
  endDate: "",
};

export const MsgUpdateData = {
  encode(message: MsgUpdateData, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.requester !== "") {
      writer.uint32(26).string(message.requester);
    }
    if (message.aggX !== "") {
      writer.uint32(34).string(message.aggX);
    }
    if (message.datasetCode !== "") {
      writer.uint32(42).string(message.datasetCode);
    }
    if (message.selectedBand !== "") {
      writer.uint32(50).string(message.selectedBand);
    }
    if (message.imageScale !== "") {
      writer.uint32(58).string(message.imageScale);
    }
    if (message.startDate !== "") {
      writer.uint32(66).string(message.startDate);
    }
    if (message.endDate !== "") {
      writer.uint32(74).string(message.endDate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateData } as MsgUpdateData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.requester = reader.string();
          break;
        case 4:
          message.aggX = reader.string();
          break;
        case 5:
          message.datasetCode = reader.string();
          break;
        case 6:
          message.selectedBand = reader.string();
          break;
        case 7:
          message.imageScale = reader.string();
          break;
        case 8:
          message.startDate = reader.string();
          break;
        case 9:
          message.endDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateData {
    const message = { ...baseMsgUpdateData } as MsgUpdateData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.requester !== undefined && object.requester !== null) {
      message.requester = String(object.requester);
    } else {
      message.requester = "";
    }
    if (object.aggX !== undefined && object.aggX !== null) {
      message.aggX = String(object.aggX);
    } else {
      message.aggX = "";
    }
    if (object.datasetCode !== undefined && object.datasetCode !== null) {
      message.datasetCode = String(object.datasetCode);
    } else {
      message.datasetCode = "";
    }
    if (object.selectedBand !== undefined && object.selectedBand !== null) {
      message.selectedBand = String(object.selectedBand);
    } else {
      message.selectedBand = "";
    }
    if (object.imageScale !== undefined && object.imageScale !== null) {
      message.imageScale = String(object.imageScale);
    } else {
      message.imageScale = "";
    }
    if (object.startDate !== undefined && object.startDate !== null) {
      message.startDate = String(object.startDate);
    } else {
      message.startDate = "";
    }
    if (object.endDate !== undefined && object.endDate !== null) {
      message.endDate = String(object.endDate);
    } else {
      message.endDate = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateData): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateData>): MsgUpdateData {
    const message = { ...baseMsgUpdateData } as MsgUpdateData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.requester !== undefined && object.requester !== null) {
      message.requester = object.requester;
    } else {
      message.requester = "";
    }
    if (object.aggX !== undefined && object.aggX !== null) {
      message.aggX = object.aggX;
    } else {
      message.aggX = "";
    }
    if (object.datasetCode !== undefined && object.datasetCode !== null) {
      message.datasetCode = object.datasetCode;
    } else {
      message.datasetCode = "";
    }
    if (object.selectedBand !== undefined && object.selectedBand !== null) {
      message.selectedBand = object.selectedBand;
    } else {
      message.selectedBand = "";
    }
    if (object.imageScale !== undefined && object.imageScale !== null) {
      message.imageScale = object.imageScale;
    } else {
      message.imageScale = "";
    }
    if (object.startDate !== undefined && object.startDate !== null) {
      message.startDate = object.startDate;
    } else {
      message.startDate = "";
    }
    if (object.endDate !== undefined && object.endDate !== null) {
      message.endDate = object.endDate;
    } else {
      message.endDate = "";
    }
    return message;
  },
};

const baseMsgUpdateDataResponse: object = {};

export const MsgUpdateDataResponse = {
  encode(_: MsgUpdateDataResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateDataResponse } as MsgUpdateDataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateDataResponse {
    const message = { ...baseMsgUpdateDataResponse } as MsgUpdateDataResponse;
    return message;
  },

  toJSON(_: MsgUpdateDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateDataResponse>): MsgUpdateDataResponse {
    const message = { ...baseMsgUpdateDataResponse } as MsgUpdateDataResponse;
    return message;
  },
};

const baseMsgDeleteData: object = { creator: "", id: 0 };

export const MsgDeleteData = {
  encode(message: MsgDeleteData, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteData } as MsgDeleteData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteData {
    const message = { ...baseMsgDeleteData } as MsgDeleteData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteData): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteData>): MsgDeleteData {
    const message = { ...baseMsgDeleteData } as MsgDeleteData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteDataResponse: object = {};

export const MsgDeleteDataResponse = {
  encode(_: MsgDeleteDataResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteDataResponse } as MsgDeleteDataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteDataResponse {
    const message = { ...baseMsgDeleteDataResponse } as MsgDeleteDataResponse;
    return message;
  },

  toJSON(_: MsgDeleteDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteDataResponse>): MsgDeleteDataResponse {
    const message = { ...baseMsgDeleteDataResponse } as MsgDeleteDataResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateData(request: MsgCreateData): Promise<MsgCreateDataResponse>;
  UpdateData(request: MsgUpdateData): Promise<MsgUpdateDataResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteData(request: MsgDeleteData): Promise<MsgDeleteDataResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateData(request: MsgCreateData): Promise<MsgCreateDataResponse> {
    const data = MsgCreateData.encode(request).finish();
    const promise = this.rpc.request(
      "shamba.geostats.geostats.Msg",
      "CreateData",
      data
    );
    return promise.then((data) =>
      MsgCreateDataResponse.decode(new Reader(data))
    );
  }

  UpdateData(request: MsgUpdateData): Promise<MsgUpdateDataResponse> {
    const data = MsgUpdateData.encode(request).finish();
    const promise = this.rpc.request(
      "shamba.geostats.geostats.Msg",
      "UpdateData",
      data
    );
    return promise.then((data) =>
      MsgUpdateDataResponse.decode(new Reader(data))
    );
  }

  DeleteData(request: MsgDeleteData): Promise<MsgDeleteDataResponse> {
    const data = MsgDeleteData.encode(request).finish();
    const promise = this.rpc.request(
      "shamba.geostats.geostats.Msg",
      "DeleteData",
      data
    );
    return promise.then((data) =>
      MsgDeleteDataResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
