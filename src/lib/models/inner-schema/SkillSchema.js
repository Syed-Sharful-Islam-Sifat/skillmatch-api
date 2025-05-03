const mongoose = require("mongoose");
const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = skillSchema