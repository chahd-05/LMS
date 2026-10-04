const Course = require("../models/Course");

async function getPublishedCourse(req, res, next) {
    try {
        const filter = {
            status: "published"
        };

        if (req.query.category) {
            filter.category = req.query.category;
        }

        if(req.query.level) {
            filter.level = req.query.level
        }

        if(req.query.keyword) {
            filter.title = {
                $regex: new RegExp(req.query.keyword, "i")
            }
        }

        let sort = {}

        if(req.query.sort === "createdAt") {
            sort.createdAt = 1
        }

        if(req.query.sort === "publishedAt") {
            sort.createdAt = 1
        }

        const courses = await Course.find(filter).sort(sort)

        res.status(200).json({
            success: true,
            data: courses
        });
    } catch(error) {
        next(error);
    }
}

async function getCourseById(req, res, next) {
    try {
        const course = await Course.findById(req.params.id);

        if(!course) {
            const error = new Error("course not found");
            error.statusCode = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            data: course
        });
    } catch(error) {
        next(error);
    }
}

module.exports = {
    getPublishedCourse,
    getCourseById
};