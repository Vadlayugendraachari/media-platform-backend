const express = require('express');
const MediaController = require('../controllers/mediaController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
const mediaController = new MediaController();

// Route for adding media
router.post('/', authMiddleware, mediaController.addMedia);

// Route for getting streaming URL for media
router.get('/:id/stream-url', authMiddleware, mediaController.getStreamUrl);

// Route for logging a view
router.post('/:id/view', authMiddleware, mediaController.logView);

// Route for getting analytics
router.get('/:id/analytics', authMiddleware, mediaController.getAnalytics);

module.exports = router;