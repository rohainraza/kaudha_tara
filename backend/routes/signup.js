// routes/signup.js
const express = require('express');
const router = express.Router();
const db = require('../models');

// Signup route
router.post('/', async (req, res) => {
  const { first_name, last_name, email, password, date_of_birth } = req.body;

  // Basic validation
  if (!first_name || !last_name || !email || !password || !date_of_birth) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Optional: check if email already exists
    const existingUser = await db.User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already in use' });
    }

    // Create the user
    const user = await db.User.create({
      first_name,
      last_name,
      email,
      password, 
      date_of_birth,
    });

    // Respond with the created user (or a message)
    res.status(201).json({ message: 'User created successfully', user });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

module.exports = router;
