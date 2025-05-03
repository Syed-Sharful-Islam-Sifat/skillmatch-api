const mongoose = require("mongoose");
const mediaSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mediaSchema