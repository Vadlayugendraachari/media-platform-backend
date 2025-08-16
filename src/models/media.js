const mongoose = require('mongoose');

const mediaAssetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    file_url: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const MediaAsset = mongoose.model('MediaAsset', mediaAssetSchema);

module.exports = MediaAsset;