var express = require('express');
var router = express.Router();


router.use('/', require('./dialogflow'))
router.use('/webhook', require('./webhook'));

module.exports = router;
