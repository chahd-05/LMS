const mongoose = require("mongoose")

const moduleSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
            trim: true
        }
    },

    {
        description: {
            type: String,
            require: true,
            trim: true
        }
    },

    {
        order: {
            type: Number,
            require: true,
            min: 1
        }
    },

    {
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: true
        }
    },

    {
        timestamps: true
    }
)

module.exports = mongoose.model("Module", moduleSchema)