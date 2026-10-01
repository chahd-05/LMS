const express = require("express")

const { getPublishedCourse } = require("../controllers/courseController")

const router = express.Router()

router.get("/", getPublishedCourse)

module.exports = router