require("dotenv").config()

const mongoose = require("mongoose")

const connectDB = require("../src/config/database")
const Course = require("../src/models/Course")
const Module = require("../src/models/Module")
const Resource = require("../src/models/Resource")

async function seed() {
    try {
        await connectDB()
        await Course.deleteMany()
        await Module.deleteMany()
        await Resource.deleteMany()

        const courses = await Course.insertMany([
            {
                title: "JavaScript Basics",
                description: "Learn the fundamentals of JavaScript.",
                category: "Programming",
                level: "beginner",
                status: "published",
                publishedAt: new Date()
            },

            {
                title: "Node.js and Express",
                description: "Build backend applications with Node.js and Express.",
                category: "Backend",
                level: "intermediate",
                status: "published",
                publishedAt: new Date()
            },
            {
                title: "MongoDB with Mongoose",
                description: "Learn how to work with MongoDB using Mongoose.",
                category: "Database",
                level: "intermediate",
                status: "draft"
            }
        ]);

        const modules = await Module.insertMany([
            {
                title: "JavaScript Variables",
                description: "Learn variables and basic data types.",
                order: 1,
                course: courses[0]._id
            },
            {
                title: "JavaScript Arrays",
                description: "Learn how to work with arrays.",
                order: 2,
                course: courses[0]._id
            },
            {
                title: "Express Basics",
                description: "Create your first Express server.",
                order: 1,
                course: courses[1]._id
            },
            {
                title: "Express Routes",
                description: "Create REST API routes with Express.",
                order: 2,
                course: courses[1]._id
            },
            {
                title: "MongoDB Basics",
                description: "Discover the main concepts of MongoDB.",
                order: 1,
                course: courses[2]._id
            },
            {
                title: "Mongoose Models",
                description: "Create MongoDB models with Mongoose.",
                order: 2,
                course: courses[2]._id
            }
        ]);

        await Resource.insertMany([
            {
                title: "Variables Video",
                type: "video",
                url: "https://example.com/javascript-variables",
                module: modules[0]._id
            },
            {
                title: "Variables PDF",
                type: "pdf",
                url: "https://example.com/javascript-variables.pdf",
                module: modules[0]._id
            },
            {
                title: "Arrays Video",
                type: "video",
                url: "https://example.com/javascript-arrays",
                module: modules[1]._id
            },
            {
                title: "Arrays Documentation",
                type: "link",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
                module: modules[1]._id
            },
            {
                title: "Express Introduction",
                type: "video",
                url: "https://example.com/express-introduction",
                module: modules[2]._id
            },
            {
                title: "Express PDF",
                type: "pdf",
                url: "https://example.com/express.pdf",
                module: modules[2]._id
            },
            {
                title: "Express Routes Video",
                type: "video",
                url: "https://example.com/express-routes",
                module: modules[3]._id
            },
            {
                title: "REST API Documentation",
                type: "link",
                url: "https://example.com/rest-api",
                module: modules[3]._id
            },
            {
                title: "MongoDB Introduction",
                type: "video",
                url: "https://example.com/mongodb-introduction",
                module: modules[4]._id
            },
            {
                title: "MongoDB PDF",
                type: "pdf",
                url: "https://example.com/mongodb.pdf",
                module: modules[4]._id
            },
            {
                title: "Mongoose Introduction",
                type: "video",
                url: "https://example.com/mongoose-introduction",
                module: modules[5]._id
            },
            {
                title: "Mongoose Documentation",
                type: "link",
                url: "https://mongoosejs.com/docs/",
                module: modules[5]._id
            }
        ]);
        console.log("seed completed successfully")
    } catch(error){
        console.error("seed failed:", error.message)
    } finally {
        await mongoose.connection.close()
    }
}

seed()