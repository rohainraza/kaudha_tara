const express = require('express');
const router = express.Router();
const db = require('../models');

// GET /alphabets?language=ccp
router.get('/', async (req, res) => {
  const languageCode = req.query.language;

  if (!languageCode) {
    return res.status(400).json({ error: 'Missing "language" query parameter' });
  }

  try {
    const language = await db.Language.findOne({ where: { code: languageCode } });

    if (!language) {
      return res.status(404).json({ error: 'Language not found' });
    }

    const alphabets = await db.Alphabet.findAll({
      where: { language_id: language.id },
      order: [['display_order', 'ASC']]
    });

    return res.json(alphabets);
  } catch (err) {
    console.error('GET /alphabets error:', err);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

module.exports = router;