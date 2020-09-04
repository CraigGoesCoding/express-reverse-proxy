class AxiosParamsObject {

    constructor() {
        this.params = {}
    }

    setApiKey(key, value) {
        if (!!key && !!value) {
           this.addParam(key, value)
        }
    }


    addParam(field, value) {
        this.params[field] = value
    }


    addParamsFromRequest(req) {
        for (const [field, value] of Object.entries(req.query)) {
            this.addParam(field, value);
        }
    }

    getParams() {
        return this.params
    }
}

module.exports = AxiosParamsObject

