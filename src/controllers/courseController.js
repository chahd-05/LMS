const course = require("../models/Course")

async function getPublishedCourse(req, res, next) {
    try {
        const courses = await course.find({
            status: "published"
        })
        res.status(200).json({
            success: true,
            data: courses 
        })
    } catch(error) {
        next(error)
    }
}

module.exports = {getPublishedCourse}