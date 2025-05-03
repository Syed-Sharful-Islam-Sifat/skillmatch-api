const mongoose = require("mongoose")
const skillSchema = require("./inner-schema/SkillSchema");
const mediaSchema = require("./inner-schema/MediaSchema");

const userSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    skills: [skillSchema],
    resumes: [mediaSchema]

}, {
    timestamps: true
})

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;