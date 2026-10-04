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

        const order = req.query.order === "desc" ? -1 : 1
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

async function createCourse(req, res, next) {
    try {
        const course = await Course.create(req.body)

        res.status(201).json({
            success: true,
            data: course
        })
    } catch(error) {
        next(error)
    }
}

async function updateCourse(req, res, next) {
    try {
        const course = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!course) {
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

async function deleteCourse(req, res, next) {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);

        if (!course) {
            const error = new Error("course not found");
            error.statusCode = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            message: "course deleted successfully"
        });
    } catch(error) {
        next(error);
    }
}

module.exports = {
    getPublishedCourse,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};