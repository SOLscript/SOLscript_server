var express = require('express');
var router = express.Router();
var post = require('../../model/post')
var user = require('../../model/user')

/* GET users listing. */
router.get('/', (req, res) => {
    post.find({like:true})
        .then((result) => {
            res.json({
                message:"success",
                data:{
                    subData: result
                }
            })
        })
        .catch((err) => {
            res.status(500).json({
                message:"server err",
                data:{

                }
            })
        })
})

router.get('/count', (req, res) => {
    post.find({like:true})
        .then((result) => {
            const count = result.length
            res.json({
                message:"success",
                data:{
                    likeCount : count
                }
            })
        })
        .catch((err) => {
            res.status(500).json({
                message:"server err",
                data:{

                }
            })
        })
})

module.exports = router;