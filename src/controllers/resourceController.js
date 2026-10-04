const Resource = require("../models/Resource")

async function getResourcesByModule(req, res, next) {
    try {
        const resources = await Resource.find({
            module: req.params.moduleId
        })

        req.status(200).json({
            success: true,
            data: resources
        })
    } catch(error) {
        next(error)
    }
}

module.exports = { getResourcesByModule }