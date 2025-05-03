
const mongoose = require("mongoose")
const User = require("../models/User")
const userRepository = {
    uploadResumeAndExtractSkills: async ({ skills, url, userId }) => {

        const result = await User.updateOne(
            {
                _id: new mongoose.Types.ObjectId(userId)
            },
            {
                $push: {
                    resumes: {
                        type: "PDF",
                        url
                    },
                    skills: skills
                },
            }
        )

        return result;
    }
}

module.exports = userRepository