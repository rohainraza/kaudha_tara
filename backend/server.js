require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./models');

const app = express();

// ---------- Middleware (Must come before routes) ----------
app.use(cors());
app.use(express.json()); // Needed to parse JSON from POST requests

// ---------- Serve Static Audio ----------
app.use('/audios', express.static(path.join(__dirname, 'public/audios')));

// ---------- Routes ----------
app.use('/api', require('./routes/signup'));
app.use('/alphabets', require('./routes/alphabets'));
app.use('/progress', require('./routes/progress')); // Route moved after middleware

// ---------- Crash & Exit Handlers ----------
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION:', err.stack || err);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED PROMISE REJECTION:', reason);
});
process.on('exit', (code) => {
  console.log(`Node process exited with code: ${code}`);
});
process.on('SIGTERM', () => {
  console.log('Received SIGTERM — shutting down...');
  process.exit(0);
});
process.on('SIGINT', () => {
  console.log('Received CTRL+C — shutting down...');
  process.exit(0);
});

// ---------- Sync DB and Start Server ----------
db.sequelize.sync({ alter: true })
  .then(() => {
    console.log('Tables synced');

    setInterval(() => {
      db.sequelize.query('SELECT 1')
        .then(() => console.log('DB connection alive'))
        .catch(err => console.error('Keep-alive error:', err.message));
    }, 4000000);

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Sequelize sync error:', err);
  });