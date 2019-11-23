var express = require('express');
var router = express.Router();
var post = require('../model/post')
var user = require('../model/user')
const multer = require('multer')
var router = express.Router();

const upload = require('../config/multer');

// const upload = multer({ dest: 'uploads/',
//     onError : function(err, next) {
//     console.log('error', err);
//     next(err);
//   }});

var cpUpload = upload.fields([{name:"th",maxCount:1},{name:'images',maxCount:8}])

router.use('/', require('./dialogflow'))
router.use('/mypage',require('./mypage/index'))
router.use('/search',require('./search/search'))
router.use('/detail',require('./detail/detail'))
router.use('/sub',require('./subscribe/subscribe'))
router.use('/recognize',require('./recognize/recognize'))

router.get('/',(req,res) => {
    res.json({
        message:"환영합니다."
    })
})

router.post('/',upload.array('images'),(req,res) => {
    const imageArr = req.files
    console.log(imageArr)
    const thumb = imageArr.shift()
    
    var arr = []

    imageArr.forEach(n => {
        arr.push(n.location)
    })

    const {title, feat, subTitle, content, type, category, price, likeCount} = req.body
    var posts = new post()
    posts.image = thumb.location
    posts.title = title
    posts.subTitle = subTitle 
    posts.feat = feat
    // posts.images = arr
    posts.content = content
    posts.category = category
    posts.price = price
    posts.type = type
    posts.likeCount = likeCount

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