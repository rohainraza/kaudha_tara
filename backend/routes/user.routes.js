// routes/user_routes.js
const express = require('express');
const router = express.Router();
const db = require('../models'); // Sequelize models

// GET user info by userId
router.get('/:userId', async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error fetching user info:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;