const BadRequestError = require("./badRequest");
const CustomAPIError = require("./customError");
const UnauthorizedError = require("./unauthorizedError");



module.exports = {
    CustomAPIError,
    BadRequestError,
    UnauthorizedError
}