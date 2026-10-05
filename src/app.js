require("dotenv").config()

const swaggerUi = require("swagger-ui-express")
const swaggerSpec = require("./config/swagger")

const courseRoute = require("./routes/courseRoutes")
const moduleRoute = require("./routes/moduleRoutes")
const resourceRoute = require("./routes/resourceRoutes")

const notFound = require("./middlewares/notFound")
const errorHandler = require("./middlewares/errorHandler")

const express = require("express")

const connectDB = require("./config/database")

const app = express()

app.use(express.json())

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

connectDB()

const PORT = process.env.PORT || 3000

app.use("/api/courses", courseRoute)
app.use("/api/courses", moduleRoute)
app.use("/api/modules", resourceRoute)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server running on port: http://localhost:${PORT}`)
})

module.exports = app