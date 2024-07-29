const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register User
router.post('/register', async (req, res) => {
    const { name, email, password, fingerprintData } = req.body;
    const newUser = new User({ name, email, password, fingerprintData });
    await newUser.save();
    res.json({ message: 'User registered successfully' });
});

// Authenticate User
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    res.json({ message: 'User authenticated successfully', userId: user._id });
});

module.exports = router;
