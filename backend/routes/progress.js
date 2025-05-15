const express = require('express');
const router = express.Router();
const db = require('../models');

// POST /progress
router.post('/', async (req, res) => {
  const { user_id, alphabet_id, is_learned } = req.body;

  if (!user_id || !alphabet_id) {
    return res.status(400).json({ error: 'user_id and alphabet_id are required' });
  }

  try {
    const [progress, created] = await db.UserAlphabetProgress.findOrCreate({
      where: { user_id, alphabet_id },
      defaults: {
        is_learned: !!is_learned,
        attempts: 1,
        last_reviewed: new Date()
      }
    });

    if (!created) {
      // If record exists, update it
      await progress.update({
        is_learned: !!is_learned,
        attempts: progress.attempts + 1,
        last_reviewed: new Date()
      });
    }

    res.json(progress);
  } catch (err) {
    console.error('POST /progress error:', err);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

// GET /progress/:userId
router.get('/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const progressList = await db.UserAlphabetProgress.findAll({
      where: { user_id: userId },
      include: [{ model: db.Alphabet, as: 'alphabet' }],
      order: [['alphabet_id', 'ASC']]
    });

    res.json(progressList);
  } catch (err) {
    console.error('GET /progress/:userId error:', err);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

module.exports = router;