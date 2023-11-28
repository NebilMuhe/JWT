const express = require('express')
const { dashboard, login } = require('../controller/controller')
const authenticationMiddleware = require('../middleware/auth')


const router = express.Router()


router.get('/dashboard',authenticationMiddleware,dashboard)
router.post('/login',login)


module.exports = router