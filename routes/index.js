var express = require('express');
var router = express.Router();
var post = require('../model/post')
var user = require('../model/user')


router.use('/', require('./regist'))
router.use('/', require('./dialogflow'))
router.use('/mypage',require('./mypage/index'))
router.use('/search',require('./search/search'))
router.use('/detail',require('./detail/detail'))
router.use('/sub',require('./subscribe/subscribe'))

router.post('/',(req,res) => {
    
    const {title, subTitle, image,category, price, like, likeCount, images} = req.body
    var posts = new post()

    posts.title = title
    posts.subTitle = subTitle 
    posts.image = image
    posts.category = category
    posts.price = price
    posts.like = like
    posts.likeCount = likeCount
    posts.images = images

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