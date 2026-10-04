const express = require("express")

const { getPublishedCourse, getCourseById, createCourse } = require("../controllers/courseController")

const router = express.Router()

router.get("/", getPublishedCourse)
router.get("/:id", getCourseById)
router.post("/", createCourse)

module.exports = router