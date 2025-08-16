const multer = require('multer');
const path = require('path');

// Configure storage options for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the directory to store uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Create a unique filename
  }
});

// Create the upload middleware
const upload = multer({ storage: storage });

// Export the upload middleware for use in routes
module.exports = upload;