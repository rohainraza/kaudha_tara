require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const db = require('./models');

// Global crash & shutdown handlers
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

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', require('./routes/signup'));

// Sequelize connection
db.sequelize.sync()
  .then(() => {
    console.log('Tables synced');

    // Keep DB alive every 4 seconds
    setInterval(() => {
      db.sequelize.query('SELECT 1')
        .then(() => console.log('DB connection alive'))
        .catch(err => console.error('DB keep-alive failed:', err.message));
    }, 4000000);

    const PORT = process.env.PORT || 8000;
      app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Sequelize sync error:', err);
  });