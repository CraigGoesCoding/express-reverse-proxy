const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
const AxiosParamsObject = require('./classes/AxiosParamsObject')

app.use(cors({
    origin: '*'
}))

require('dotenv').config()


app.get(':endpoint([\\/\\w\\.-]*)', function (req, res) {
    // Remove any trailing slash from base url
    const endpoint = (process.env.API_BASE_URL).replace(/\/$/, "") + req.params.endpoint

    const paramsObj = new AxiosParamsObject()
    paramsObj.setApiKey(process.env.API_KEY_PARAM_NAME, process.env.API_KEY)
    paramsObj.addParamsFromRequest(req)
    
    axios.get(endpoint, {
        params: paramsObj.getParams(req)
    }).then(response => {
        res.json(response.data)
    }).catch(error => {
        res.json(error)
    })
})


app.listen(3000)