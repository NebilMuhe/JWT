require('dotenv').config()
const express = require('express')
const router = require('./routes/route')
const errorHandler = require('./middleware/errorHandler')

const app = express()

const PORT = process.env.PORT || 3000
app.use(express.json())

app.use("/api/v1",router)

app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})