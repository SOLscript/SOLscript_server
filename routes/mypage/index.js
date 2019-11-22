var express = require('express');
var router = express.Router();

router.use('/sublist',require('./sublist'))
router.use('/search',require('./search'))
router.use('/usage',require('./usage'))


module.exports = router;