// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
const { SigningStargateClient } = require("@cosmjs/stargate");
const { Registry } = require("@cosmjs/proto-signing");
const { Api } = require("./rest");
const { MsgUpdateData } = require("./tx");
const { MsgDeleteData } = require("./tx");
// const { MsgRequestData } = require("./tx");
const { MsgCreateData } = require("./tx");

const types = [
    ["/shamba.geostats.geostats.MsgUpdateData", MsgUpdateData],
    ["/shamba.geostats.geostats.MsgDeleteData", MsgDeleteData],
    // ["/shamba.geostats.geostats.MsgRequestData", MsgRequestData],
    ["/shamba.geostats.geostats.MsgCreateData", MsgCreateData],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async(wallet, { addr: addr } = { addr: "http://165.232.134.108:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs) => client.signAndBroadcast(address, msgs, defaultFee),
        msgUpdateData: (data) => ({ typeUrl: "/shamba.geostats.geostats.MsgUpdateData", value: data }),
        msgDeleteData: (data) => ({ typeUrl: "/shamba.geostats.geostats.MsgDeleteData", value: data }),
        // msgRequestData: (data) => ({ typeUrl: "/shamba.geostats.geostats.MsgRequestData", value: data }),
        msgCreateData: (data) => ({ typeUrl: "/shamba.geostats.geostats.MsgCreateData", value: data }),
    };
};
const queryClient = async({ addr: addr } = { addr: "http://165.232.134.108:1317" }) => {
    return new Api({ baseUrl: addr });
};

module.exports = { txClient, queryClient, };