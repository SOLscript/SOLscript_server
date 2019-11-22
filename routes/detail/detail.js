var express = require('express');
var router = express.Router();
var post = require('../../model/post')
var user = require('../../model/user')

/* GET users listing. */
router.get('/:id', (req, res) => {
    const id = req.params.id

    post.findOne({_id:id})
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

/* GET users listing. */
router.get('/like/:id', (req, res) => {
    const id = req.params.id

    post.findOne({_id:id})
        .then((result) => {
            if (result.like) {
                result.like = false
                result.save()
            }else{
                result.like = true
                result.save()
            }

            res.json({
                message:"success",
                data:{
                    subData: result.like
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