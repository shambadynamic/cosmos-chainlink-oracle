const { DirectSecp256k1HdWallet } = require('@cosmjs/proto-signing')
const { assertIsBroadcastTxSuccess } = require('@cosmjs/stargate')

const { MsgCreateData } = require('../cosmos/tx')
const { txClient } = require('../cosmos/client')

require('dotenv').config()

class LinkAPI {
    constructor() {
        this.main = {
            //Create, sign and broadcast a quote tx
            signAndBroadcast: async(oracle, requester, agg_x, dataset_code, selected_band, image_scale, start_date, end_date) => {
                const wallet = await DirectSecp256k1HdWallet.fromMnemonic(process.env.MNEMONIC);
                const client = await txClient(wallet)

                const msg = MsgCreateData.fromJSON({
                    creator: oracle,
                    requester: requester,
                    aggX: agg_x,
                    datasetCode: dataset_code,
                    selectedBand: selected_band,
                    imageScale: image_scale,
                    startDate: start_date,
                    endDate: end_date
                })

                // console.log(msg)
                const msgAny = client.msgCreateData(msg)
                    // console.log(msgAny)
                const result = await client.signAndBroadcast([msgAny])
                result.result = Number(msg.aggX)
                console.log("Result: ", result)
                return result

            }
        }
    }
}
module.exports = LinkAPI