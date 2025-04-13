const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { resumeUpload } = require('../services/ResumeServices');
const { upload, handleFileValidationError } = require('../lib/validators/ResumeValidator');
const HttpError = require('../lib/helper/HttpError');

router.post('/upload',upload.single('resume'),handleFileValidationError,authMiddleware(async (req,res)=>{

 res.message = "Resume uploaded successfully";
 const resume = await resumeUpload(req.file);
}))

module.exports = router;
