var express = require('express');
var router = express.Router();
var post = require('../../model/post')
var user = require('../../model/user')


var yo = [
    {
        title:"you",
        category:"music",
        price: 4003,
        date: "2019-11-03"
    },
    {
        title:"you1",
        category:"music",
        price: 4003,
        date: "2019-11-03"
    },
    {
        title:"you2",
        category:"music",
        price: 4003,
        date: "2019-11-05"
    },
    {
        title:"you3",
        category:"music",
        price: 4003,
        date: "2019-11-05"
    },
    {
        title:"you4",
        category:"music",
        price: 4003,
        date: "2019-11-07"
    }
]

/* GET users listing. */
router.get('/:category', (req, res) => {
    const category = req.params.category

    post.find({category:category})
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

router.get('/', (req, res) => {
    const word = req.query.word


    
    post.find({}).sort({date:1})
        .then()

    post.find({$text: {$search: word}},{score:{$meta: "textScore"}}).sort({score:{$meta:"textScore"}})
        .then((result) => {
            res.status(200).json({
                message: "success",
                data: {
                    subData:result
                }
            })
        })
})

module.exports = router;