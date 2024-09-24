const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/admin-dashboard', protect, admin, (req, res) => {
  res.send('Admin Dashboard');
});
router.get('/user-dashboard', protect, (req, res) => {
  res.send('User Dashboard');
});

module.exports = router;
