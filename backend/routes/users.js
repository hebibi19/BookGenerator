const express = require('express');
const router = express.Router();
// all routes go through the UserController
const {registerUser, getMe, loginUser} = require('../controllers/userController');
const {protect} = require('../middleware/authMiddleware');

// needed routes
router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);


module.exports = router;