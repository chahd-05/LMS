const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema(
    {
        title: {
    type: String,
    require: true,
    trim: true
    },

    description: {
        type: String,
        require: true,
        trim: true
    },

    category: {
        type: String,
        require: true,
        trim: true
    },

    level: {
        type: String,
        require: true,
        trim: true
    },

    status: {
        type: String,
        require: true,
        enum: ["beginner", "intermediate", "advanced"]
    },

    status: {
        type: String,
        require: true,
        enum: ["draft", "published"]
    },

    publishedAt: {
        type: date,
        default: null
    },
    },

    {
        timestamps: true
    }
)

module.exports = mongoose.model("Course", courseSchema)