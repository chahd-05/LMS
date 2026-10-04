const express = require("express")

const { getPublishedCourse, getCourseById, createCourse, updateCourse } = require("../controllers/courseController")

const router = express.Router()

router.get("/", getPublishedCourse)
router.get("/:id", getCourseById)
router.post("/", createCourse)
router.put("/", updateCourse)

module.exports = router