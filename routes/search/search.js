var express = require('express');
var router = express.Router();
var post = require('../../model/post')
var user = require('../../model/user')

/* GET users listing. */
router.get('/:category', (req, res) => {
    const category = req.params.category
    console.log(category)
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
    console.log(word)
    post.find({ $or: [ {'title': {'$regex': word, '$options': 'i'}},{'subTitle': {'$regex': word, '$options': 'i'}}]})
        .then((result) => {
            res.status(200).json({
                message: "success",
                data: {
                    subData:result
                }
            })
        })
        .catch((err) => {
            console.log(err)
        })

    // post.find({$text: {$search: word}},{score:{$meta: "textScore"}}).sort({score:{$meta:"textScore"}})
    //     .then((result) => {
    //         res.status(200).json({
    //             message: "success",
    //             data: {
    //                 subData:result
    //             }
    //         })
    //     })

})

module.exports = router;