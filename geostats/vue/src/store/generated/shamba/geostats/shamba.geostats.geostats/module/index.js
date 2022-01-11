// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateData } from "./types/geostats/tx";
import { MsgDeleteData } from "./types/geostats/tx";
import { MsgUpdateData } from "./types/geostats/tx";
const types = [
    ["/shamba.geostats.geostats.MsgCreateData", MsgCreateData],
    ["/shamba.geostats.geostats.MsgDeleteData", MsgDeleteData],
    ["/shamba.geostats.geostats.MsgUpdateData", MsgUpdateData],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCreateData: (data) => ({ typeUrl: "/shamba.geostats.geostats.MsgCreateData", value: MsgCreateData.fromPartial(data) }),
        msgDeleteData: (data) => ({ typeUrl: "/shamba.geostats.geostats.MsgDeleteData", value: MsgDeleteData.fromPartial(data) }),
        msgUpdateData: (data) => ({ typeUrl: "/shamba.geostats.geostats.MsgUpdateData", value: MsgUpdateData.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
