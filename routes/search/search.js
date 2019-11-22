var express = require('express');
var router = express.Router();
var post = require('../../model/post')
var user = require('../../model/user')

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

    post.find({$text: {$search: "내일 유"}})
        // .sort({score:{$meta:"textScore"}})
        .then((result) => {
            console.log(result)
            res.status(200).json({
                message: "success",
                data: {

                }
            })
        })

})

module.exports = router;