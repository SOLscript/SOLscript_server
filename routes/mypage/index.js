var express = require('express');
var router = express.Router();

router.use('/likeList', require('./likeList'));
router.use('/subList',require('./subList'))
router.use('/search',require('./search'))
router.use('/usage',require('./usage'))


module.exports = router;