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
            type: String,
            ref: mongoose.Schema.Types.ObjectId,
            required: true
        }
    },

     {
        timeseries: true
    }
)

module.exports = mongoose.model("Resource", resourceSchema)