const express = require('express');
const { registerUser, loginUser, getMe } = require('../controllers/authController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
router.post('/register', registerUser);

// @route   POST /api/auth/login
// @desc    Login user
router.post('/login', loginUser);

// @route   GET /api/auth/me
// @desc    Get current user profile (Protected route)
router.get('/me', protect, getMe);

// @route   GET /api/auth/admin-dashboard
// @desc    Get admin dashboard (Protected route)
router.get('/admin-dashboard', protect, admin, (req, res) => {
  res.send('Admin Dashboard');
});

// @route   GET /api/auth/user-dashboard
// @desc    Get user dashboard (Protected route)
router.get('/user-dashboard', protect, (req, res) => {
  res.send('User Dashboard');
});

module.exports = router;
