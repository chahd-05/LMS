const express = require("express")

const { getPublishedCourse, getCourseById, createCourse, updateCourse, deleteCourse } = require("../controllers/courseController")

const router = express.Router()

router.get("/", getPublishedCourse)
router.get("/:id", getCourseById)
router.post("/", createCourse)
router.put("/", updateCourse)
router.delete("/", deleteCourse)

module.exports = router