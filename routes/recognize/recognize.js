var express = require('express');
var router = express.Router();
var post = require('../../model/post')
var user = require('../../model/user')

/* GET users listing. */
router.get('/', (req, res) => {

    one = []
    two = []
    thr = []

    user.findOne()
        .then((use) => {
            console.log(use)
            const pre = use.prefer
            console.log(pre)
            // 특징으로
            post.find({feat:pre[0]}).limit(5)   
                .then((result) => {
                    result.forEach(n =>{
                        one.push({
                            title:n.title,
                            image:n.image,
                            _id:n._id
                        })
                    })
                    post.find({category:pre[1]}).limit(5)   
                        .then((result) => {
                            result.forEach(n =>{
                                two.push({
                                    title:n.title,
                                    image:n.image,
                                    _id:n._id
                                })
                            })
                            pre[2]*=1
                            console.log(pre[2])
                            post.find().lte('price', pre[2]).limit(5)   
                            .then((result) => {
                                result.forEach(n =>{
                                    thr.push({
                                        title:n.title,
                                        image:n.image,
                                        _id:n._id
                                    })
                                })
                                res.json({
                                    message:"success",
                                    data:{
                                        one: shuffle(one),
                                        two: shuffle(two),
                                        thr: shuffle(thr)
                                    }
                                })
                            })
                        })
                })
            
          

            
        })
})

function shuffle(o){
	o.sort(function(){return 0.5-Math.random()});
	return o;
};

module.exports = router;