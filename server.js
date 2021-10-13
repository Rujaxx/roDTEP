const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

//Load env vars
dotenv.config({ path : './config/config.env'})

//Db connection
connectDB()

const app = express()

const PORT = process.env.PORT || 5000



const server = app.listen(PORT,console.log(`Server is listening on ${PORT}`))