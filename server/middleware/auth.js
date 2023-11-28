const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/customError')
const { UnauthorizedError } = require('../errors')


const authenticationMiddleware = (req,res,next)=>{
    const {authorization} = req.headers

    if(!authorization || !authorization.startsWith('Bearer')){
        throw new UnauthorizedError("No token provided")
    }
    const token = authorization.split(' ')[1]

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        const {id,username} = decode
        req.user = {id,username}
        next()
    } catch (error) {
        throw new UnauthorizedError("No authorized access to access this route")
    }
}

module.exports = authenticationMiddleware