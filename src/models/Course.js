const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema(
    {
        title: {
    type: String,
    required: true,
    trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    category: {
        type: String,
        required: true,
        trim: true
    },

    level: {
        type: String,
        required: true,
        enum: ["beginner", "intermediate", "advanced"]
    },

    status: {
        type: String,
        required: true,
        enum: ["draft", "published"]
    },

    publishedAt: {
        type: Date,
        default: null
    },
    },

    {
        timestamps: true
    }
)

module.exports = mongoose.model("Course", courseSchema)