const express = require("express")

const { getPublishedCourse, getCourseById } = require("../controllers/courseController")

const router = express.Router()

router.get("/", getPublishedCourse)
router.get("/:id", getCourseById)

module.exports = router