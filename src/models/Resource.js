const mongoose = require("mongoose")

const resourceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        type: {
            type: String,
            required: true,
            enum: ["video", "pdf", "link"] 
        },

        url: {
            type: String,
            required: true,
            trim: true
        },

        module: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Module",
            required: true
        }
    },

     {
        timestamps: true
    }
)

module.exports = mongoose.model("Resource", resourceSchema)