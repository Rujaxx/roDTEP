const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

//Load env vars
dotenv.config({ path : './config/config.env'})

//Db connection
connectDB()

// Routers files
const item = require('./routes/item')

const app = express()

// Body parser
app.use(express.json());

//Mount Routers
app.use('/api/v1/item', item)


const PORT = process.env.PORT || 5000



const server = app.listen(PORT,console.log(`Server is listening on ${PORT}`))