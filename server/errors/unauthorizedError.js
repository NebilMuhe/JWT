const CustomAPIError = require("./customError");
const status = require('http-status-codes')

class UnauthorizedError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = status.UNAUTHORIZED
    }
}

module.exports = UnauthorizedError