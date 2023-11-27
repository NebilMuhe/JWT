const express = require('express')
const { dashboard, login } = require('../controller/controller')


const router = express.Router()


router.get('/dashboard',dashboard)
router.post('/login',login)


module.exports = router