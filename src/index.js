require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const connectDB = require('../config/dbConn')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const authRoute = require('../Routes/authRoute')


connectDB()
app.use(express.json())
app.use(cookieParser())
app.use('/auth', authRoute)


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
})