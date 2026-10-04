const express = require("express")

const { getResourcesByModule } = require("../controllers/resourceController")

const router = express.Router()

router.get("/:modduleId/resources", getResourcesByModule)

module.exports = router