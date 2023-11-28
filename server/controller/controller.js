require('express-async-errors')
const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/customError')
const { BadRequestError } = require('../errors')

const login = async(req,res)=>{
    const {username,password} = req.body
    console.log(username,password)

    if(!username || !password) {
        throw new BadRequestError("username and password required")
    }

    const id = new Date().getTime()

    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

    res.status(200).json({msg:"User Created",token})
}


const dashboard = async(req,res)=>{
    const {id,username} = req.user
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello ${username}`,
    value:`Your lucky number ${luckyNumber}`}) 
}


module.exports = {
    login,dashboard
}