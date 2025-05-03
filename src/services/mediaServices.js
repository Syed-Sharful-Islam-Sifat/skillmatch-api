const cloudinary = require('cloudinary').v2;
const {Readable} = require("stream")
require("dotenv").config();

const uploadMedia = async ({ mediaType, buffer }) => {
    const options = {
        resource_type: "auto",  // Important for PDFs
        // Like "PDF", "Images" etc
    };

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    })



    return new Promise((res, rej) => {
        const theTransformStream = cloudinary.uploader.upload_stream(
            options,
            (err, result) => {
                if (err) return rej(err);
                res(result);
            }
        );
        let str = Readable.from(buffer);
        str.pipe(theTransformStream);
    });


}

module.exports = {
    uploadMedia
}