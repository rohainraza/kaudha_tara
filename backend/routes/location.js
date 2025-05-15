const express = require('express');
const router = express.Router();
const db = require('../models');

// Existing POST route to save location
router.post('/', async (req, res) => {
  const { userId, name, latitude, longitude } = req.body;

  if (!userId || !name || !latitude || !longitude) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await db.UserLocation.upsert({
      userId,
      name,
      latitude,
      longitude,
      updatedAt: new Date()
    });

    res.status(200).json({ message: "Location saved" });
  } catch (error) {
    console.error("DB Error:", error);
    res.status(500).json({ error: "Failed to save location" });
  }
});


// NEW: GET all user locations (for frontend display)
router.get('/', async (req, res) => {
  try {
    const users = await db.UserLocation.findAll();
    res.status(200).json(users);
  } catch (err) {
    console.error('Fetch Error:', err);
    res.status(500).json({ error: "Failed to fetch user locations" });
  }
});

module.exports = router;