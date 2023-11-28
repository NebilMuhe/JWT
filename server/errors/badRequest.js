const CustomAPIError = require("./customError");
const status = require('http-status-codes')

class BadRequestError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = status.BAD_REQUEST
    }
}

module.exports = BadRequestError