const multer = require("multer");
const path = require("path");
const HttpError = require("../helper/HttpError");

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 1024 * 1024 * 2, // 2MB
    },
    fileFilter: (req, file, cb) => {
    console.log({file});
        if(file.mimetype !== "application/pdf"){        
             return cb(new Error("Only PDF files are allowed"), false);
        }

        else{
            cb(null,true);
        }
    },
});

const handleFileValidationError = (err,req,res,next)=>{
    console.log({err});
    if(err instanceof multer.MulterError){
     

        return res.status(400).json({
            type: 'ERROR',
            message:err.message,
            result: null,
            error: err.stack,
        });
    }

    if(err){
        return res.status(400).json({
            type: 'ERROR',
            message: err.message,
            result: null,
            error: err.stack,
        });
    }
    next();
}
module.exports = {handleFileValidationError , upload};
