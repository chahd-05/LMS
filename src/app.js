require("dotenv").config()

const express = require("express")

const connectDB = require("./config/database")

const app = express()

app.use(express.json())

connectDB()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

module.exports = app