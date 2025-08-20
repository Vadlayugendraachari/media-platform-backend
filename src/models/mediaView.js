const mongoose = require('mongoose');

const mediaViewSchema = new mongoose.Schema({
    media: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Media',
        required: true
    },
    ip: {
        type: String,
        required: true
    },
    viewedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('MediaView', mediaViewSchema);
