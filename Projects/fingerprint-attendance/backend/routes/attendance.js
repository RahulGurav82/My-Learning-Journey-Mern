const express = require('express');
const router = express.Router();
const Attendance = require('../models/Attendance');

// Record Attendance
router.post('/record', async (req, res) => {
    const { userId, fingerprintData } = req.body;
    // Here, you should validate the fingerprint data with the stored data
    const attendance = new Attendance({ userId });
    await attendance.save();
    res.json({ message: 'Attendance recorded successfully' });
});

module.exports = router;
