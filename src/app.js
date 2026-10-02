require("dotenv").config()

const courseRoute = require("./routes/courseRoutes")
const moduleRoute = require("./routes/moduleRoutes")

const notFound = require("./middlewares/notFound")
const errorHandler = require("./middlewares/errorHandler")

const express = require("express")

const connectDB = require("./config/database")

const app = express()

app.use(express.json())

connectDB()

const PORT = process.env.PORT || 3000

app.use("/api/courses", courseRoute)
app.use("/api/courses", moduleRoute)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server running on port: http://localhost:${PORT}`)
})

module.exports = app