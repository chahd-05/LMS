const Module = require("../models/Module")
async function getModulesByCourse(req, res, next) {
    try {

        const modules = await Module.find({
            course: req.params.courseId
        })

        res.status(200).json({
            success: true,
            data: modules
        })
    } catch(error) {
        next(error)
    }
}

module.exports = { getModulesByCourse }