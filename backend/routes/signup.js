const express = require('express');
const router = express.Router();
const db = require('../models');
const User = db.User;

router.post('/signup', async (req, res) => {
  console.log('Route hit: /api/signup');
  console.log('Request body:', req.body);

  try {
    const { first_name, last_name, email, date_of_birth } = req.body;

    if (!first_name || !last_name || !email || !date_of_birth) {
      console.warn('Missing required fields');
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      console.warn('Email already exists:', email);
      return res.status(409).json({ error: 'Email already exists.' });
    }

    const newUser = await User.create({ first_name, last_name, email, date_of_birth });
    console.log('User created:', newUser.dataValues);

    res.status(201).json({
      message: 'User registered successfully!',
      user: newUser,
    });
  } catch (error) {
    console.error('Error in /signup handler:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

module.exports = router;