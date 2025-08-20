const Media = require('../models/media');
const MediaView = require('../models/mediaView');
const redisClient = require('../config/redis');

class MediaController {
    async addMedia(req, res) {
        try {
            // Logic for handling media uploads
            // This will include validating the request, saving the media metadata to the database,
            // and processing the uploaded file using the upload utility.
        } catch (error) {
            res.status(500).json({ message: 'Error uploading media', error });
        }
    }

    async getStreamUrl(req, res) {
        try {
            const mediaId = req.params.id;
            // Logic for generating a secure streaming URL for the media asset
            // This will include fetching the media details from the database and creating a temporary link.
        } catch (error) {
            res.status(500).json({ message: 'Error generating stream URL', error });
        }
    }

    // POST /media/:id/view
    async logView(req, res) {
        try {
            const mediaId = req.params.id;
            const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

            const media = await Media.findById(mediaId);
            if (!media) {
                return res.status(404).json({ message: 'Media not found' });
            }

            await MediaView.create({ media: mediaId, ip });
            res.status(201).json({ message: 'View logged' });
        } catch (error) {
            res.status(500).json({ message: 'Error logging view', error });
        }
    }

    // GET /media/:id/analytics
    async getAnalytics(req, res) {
        try {
            const mediaId = req.params.id;
            const cacheKey = `media:${mediaId}:analytics`;

            // Try to get from cache first
            const cached = await redisClient.get(cacheKey);
            if (cached) {
                return res.json(JSON.parse(cached));
            }

            const media = await Media.findById(mediaId);
            if (!media) {
                return res.status(404).json({ message: 'Media not found' });
            }

            const views = await MediaView.find({ media: mediaId });
            const total_views = views.length;
            const unique_ips = new Set(views.map(v => v.ip)).size;

            // Aggregate views per day
            const views_per_day = {};
            views.forEach(v => {
                const day = v.viewedAt.toISOString().slice(0, 10);
                views_per_day[day] = (views_per_day[day] || 0) + 1;
            });

            const analytics = { total_views, unique_ips, views_per_day };
            // Cache for 60 seconds
            await redisClient.setEx(cacheKey, 60, JSON.stringify(analytics));

            res.json(analytics);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching analytics', error });
        }
    }
}

module.exports = MediaController;