const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
const { connectDB } = require('./config/database');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(authMiddleware);

// Database connection
connectDB();

// Routes
app.use('/auth', authRoutes);
app.use('/media', mediaRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});