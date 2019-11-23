var express = require('express');
var router = express.Router();
var post = require('../model/post')
var user = require('../model/user')
var router = express.Router();


// const upload = multer({ dest: 'uploads/',
//     onError : function(err, next) {
//     console.log('error', err);
//     next(err);
//   }});



router.use('/', require('./dialogflow'))
router.use('/mypage',require('./mypage/index'))
router.use('/search',require('./search/search'))
router.use('/detail',require('./detail/detail'))
router.use('/sub',require('./subscribe/subscribe'))
    

router.post('/posts',(req,res) => {
    
    const {usage} = req.body
    var posts = new user()

    posts.usage = usage
    posts.save()
        .then((result) => {
            res.json({
                message: result
            })
        })
        .catch((err) => {
            res.json({
                message: err
            })
        })
})

router.post('/user',(req,res) => {
    
    const {usage} = req.body
    var posts = new user()

    posts.usage = usage
    posts.save()
        .then((result) => {
            res.json({
                message: result
            })
        })
        .catch((err) => {
            res.json({
                message: err
            })
        })
})
module.exports = router;