const express = require('express')
const { json, request } = require('express')
const app = express()
const port = process.env.PORT || 3000
const createRequest = require('./index').createRequest
const api = require('./services/api').API
var finalResult = 'Result';

require('dotenv').config()

app.use(json())
app.set('json spaces', 2)
app.get('/', function(req, res) {
    res.send(finalResult);
});

app.post('/', async(req, res) => {
    req.body["data"] = JSON.parse(req.body["data"]);
    req.body.data.data = JSON.parse(req.body.data.data);

    createRequest(req.body, async(status, result) =>  {

        console.log('REQ Body', req.body)

        if (status == 200) {

            // const quote = result.data[0].q
            // const author = result.data[0].a
            // const text = `${quote} - ${author}`

            const requester = req.body.data.requester
            console.log(req.body.data)
            const agg_x = result.result
            const dataset_code = req.body.data.data.dataset_code
            const selected_band = req.body.data.data.selected_band
            const image_scale = req.body.data.data.image_scale
            const start_date = req.body.data.data.start_date
            const end_date = req.body.data.data.end_date
                //console.log(result.result)
            finalResult = await api.main.signAndBroadcast(process.env.ORACLE_ADDRESS, requester, agg_x, dataset_code, selected_band, image_scale.toString(), start_date, end_date)

            // var height = finalResult['height']
            // var gasUsed = finalResult['gasUsed']
            // var gasWanted = finalResult['gasWanted']
            // var transactionHash = finalResult['transactionHash']
            // var agg_result = finalResult['result']

            // finalResult = {
            //     'height': height,
            //     'gasUsed': gasUsed,
            //     'gasWanted': gasWanted,
            //     'transactionHash': transactionHash,
            //     'result': agg_result
            // }

            res.send(finalResult)


        }





        res.status(status).json(result)


    })
})

app.listen(port, () =>  console.log(`Listening on port ${port}`))