const { Requester, Validator } = require('@chainlink/external-adapter')

// Define custom error scenarios for the API.
// Return true for the adapter to retry.
const customError = (data) => {
    if (data.Response === 'Error') return true
    return false
}

const customParams = {
    // dataset_code: ['dataset_code'],
    // selected_band: ["selected_band"],
    // geometry: ["geometry"],
    // start_date: ["start_date"],
    // end_date: ["end_date"],
    // image_scale: ["image_scale"],
    // agg_x: ["agg_x"],
    data: false,
    endpoint: false,
    requester: false
}

const createRequest = (input, callback) => {

    console.log(input)
    const validator = new Validator(input, customParams)
    const jobRunID = validator.validated.id
        // const endpoint = validator.validated.data.endpoint || 'random'
        // const url = `https://zenquotes.io/api/${endpoint}`

    const endpoint = validator.validated.data.endpoint || 'statistics'

    const url = `https://shamba-gateway-2ycmet71.ew.gateway.dev/geoapi/v1/${endpoint}`

    console.log(validator.validated.data.data)

    const dataset_code = validator.validated.data.data.dataset_code
    const selected_band = validator.validated.data.data.selected_band
    const geometry = validator.validated.data.data.geometry
    const start_date = validator.validated.data.data.start_date
    const end_date = validator.validated.data.data.end_date
    const image_scale = validator.validated.data.data.image_scale
    const agg_x = validator.validated.data.data.agg_x

    const data = {
        dataset_code,
        selected_band,
        geometry,
        start_date,
        end_date,
        image_scale,
    }

    console.log(data)

    // const config = {
    //     url
    // }

    const config = {
        method: 'post',
        url,
        data,
        timeout: 3600000
    }


    Requester.request(config, customError)
        .then(res => {
            res.data.result = Requester.validateResultNumber(res.data, ["data", agg_x]) * (10 ** 18)
            res.data = {
                [agg_x]: res.data.result,
                "result": res.data.result
            }
            callback(res.status, Requester.success(jobRunID, res))
        }).catch(error => {
            callback(500, Requester.errored(jobRunID, error))
        })
}


// This is a wrapper to allow the function to work with
// GCP Functions
exports.gcpservice = (req, res) => {
    createRequest(req.body, (statusCode, data) => {
        res.status(statusCode).send(data)
    })
}

// This is a wrapper to allow the function to work with
// AWS Lambda
exports.handler = (event, context, callback) => {
    createRequest(event, (statusCode, data) => {
        callback(null, data)
    })
}

// This is a wrapper to allow the function to work with
// newer AWS Lambda implementations
exports.handlerv2 = (event, context, callback) => {
    createRequest(JSON.parse(event.body), (statusCode, data) => {
        callback(null, {
            statusCode: statusCode,
            body: JSON.stringify(data),
            isBase64Encoded: false
        })
    })
}

// This allows the function to be exported for testing
// or for running in express
module.exports.createRequest = createRequest