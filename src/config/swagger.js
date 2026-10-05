const swaggerDoc = require("swagger-jsdoc")

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "LMS API",
            version: "1.0.0",
            description: "Learning Management System API"
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Local server"
            }
        ],
        components: {
            schemas: {
                Course: {
                    type: "object",
                    properties: {
                        _id: { type: "string", example: "665f1a2b3c4d5e6f78901234" },
                        title: { type: "string", example: "Introduction to JavaScript" },
                        description: { type: "string", example: "Learn the basics of JavaScript." },
                        category: { type: "string", example: "Programming" },
                        level: { type: "string", enum: ["beginner", "intermediate", "advanced"] },
                        status: { type: "string", enum: ["draft", "published"] },
                        publishedAt: { type: "string", format: "date-time", nullable: true },
                        createdAt: { type: "string", format: "date-time" },
                        updatedAt: { type: "string", format: "date-time" }
                    }
                },
                Module: {
                    type: "object",
                    properties: {
                        _id: { type: "string", example: "665f1a2b3c4d5e6f78901235" },
                        title: { type: "string", example: "Variables and data types" },
                        description: { type: "string", example: "Understand JavaScript variables." },
                        order: { type: "integer", minimum: 1, example: 1 },
                        course: { type: "string", example: "665f1a2b3c4d5e6f78901234" },
                        createdAt: { type: "string", format: "date-time" },
                        updatedAt: { type: "string", format: "date-time" }
                    }
                },
                Resource: {
                    type: "object",
                    properties: {
                        _id: { type: "string", example: "665f1a2b3c4d5e6f78901236" },
                        title: { type: "string", example: "Lesson video" },
                        type: { type: "string", enum: ["video", "pdf", "link"] },
                        url: { type: "string", example: "https://example.com/lesson" },
                        module: { type: "string", example: "665f1a2b3c4d5e6f78901235" },
                        createdAt: { type: "string", format: "date-time" },
                        updatedAt: { type: "string", format: "date-time" }
                    }
                }
            }
        }
    },
    apis: ["./src/routes/*.js"]
}

const swaggerSpec = swaggerDoc(options);

module.exports = swaggerSpec