const db = require('./models');

db.Language.create({ name: 'Chakma', code: 'ccp' })
  .then(() => {
    console.log('✅ Language inserted');
    process.exit();
  })
  .catch((err) => {
    console.error('❌ Failed to insert:', err);
    process.exit(1);
  });