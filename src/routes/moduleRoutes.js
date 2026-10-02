const express = require("express")

const { getModulesByCourse } = require("../controllers/moduleController")

const router = express.Router()

router.get("/:courseId/modules", getModulesByCourse)

module.exports = router