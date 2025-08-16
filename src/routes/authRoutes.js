const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

// POST /auth/signup
router.post('/signup', authController.signup);

// POST /auth/login
router.post('/login', authController.login);

module.exports = router;