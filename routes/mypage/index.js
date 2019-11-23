var express = require('express');
var router = express.Router();

router.use('/like',require('./likeList'))
router.use('/search',require('./search'))
router.use('/usage',require('./usage'))
router.use('/sublist',require('./subList'))

module.exports = router;