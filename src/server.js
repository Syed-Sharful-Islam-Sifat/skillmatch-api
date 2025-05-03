const express = require('express');
const multer = require('multer');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const resumeRoutes = require('./routes/resumeRoutes');
require("dotenv").config();
// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // HTTP request logger
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Basic route
app.use("/api/v1/a/resume",resumeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // For testing purposes
