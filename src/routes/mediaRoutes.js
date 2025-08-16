const express = require('express');
const MediaController = require('../controllers/mediaController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
const mediaController = new MediaController();

// Route for adding media
router.post('/', authMiddleware.verifyToken, mediaController.addMedia);

// Route for getting streaming URL for media
router.get('/:id/stream-url', authMiddleware.verifyToken, mediaController.getStreamUrl);

module.exports = router;