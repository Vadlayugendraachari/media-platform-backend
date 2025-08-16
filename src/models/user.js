const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const AdminUser = mongoose.model('AdminUser', userSchema);

module.exports = AdminUser;