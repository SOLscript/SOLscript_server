const express = require('express');
const router = express.Router();

router.use('/shinhanCard', require('./shinhanCard'));

module.exports = router;