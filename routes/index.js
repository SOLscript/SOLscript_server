var express = require('express');
var router = express.Router();
var post = require('../model/post')


router.use('/search',require('./search/search'))
router.post('/',(req,res) => {
    const {title, subtitle, image,category, price, like, likeCount, images} = req.body
    var posts = new post()

    posts.title = title
    posts.subtitle = subtitle 
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
module.exports = router;