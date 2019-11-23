var express = require('express');
var router = express.Router();
var post = require('../../model/post')
var user = require('../../model/user')

var test = [
    {
        title:"Youtube",
        category:"entertain",
        price: 9900,
        image:"https://modoctest.s3.ap-northeast-2.amazonaws.com/1574506673972.png",
        type:"month",
        date: "2019-11-03"
    },
    {
        title:"Naver Cloud",
        category:"digital",
        price: 8000,
        image: "https://modoctest.s3.ap-northeast-2.amazonaws.com/1574507027962.jpeg",
        type:"month",
        date: "2019-11-03"
    },
    {
        title:"Google Cloud",
        category:"digital",
        price: 3000,
        type:"month",
        image:"https://modoctest.s3.ap-northeast-2.amazonaws.com/1574507149865.jpeg",
        date: "2019-11-11"
    },
    {
        title:"Netflix",
        category:"entertain",
        price: 8000,
        type:"month",
        image:"https://modoctest.s3.ap-northeast-2.amazonaws.com/1574518752319.jpg",
        date: "2019-11-23"
    },
    {
        title:"풀무원",
        category:"food",
        price: 9900,
        image:"https://modoctest.s3.ap-northeast-2.amazonaws.com/1574519728123.png",
        type:"month",
        date: "2019-11-14"
    },
]

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
                                        subTitle: n.subTitle,
                                        _id:n._id
                                    })
                                })
                                res.json({
                                    message:"success",
                                    data:{
                                        // one: shuffle(one),
                                        // two: shuffle(two),
                                        thr: shuffle(thr).slice(0,2)
                                    }
                                })
                            })
                        })
                })
            
        })
})

router.get('/total', (req, res) => {

    totalPrice = 0
    var arr = []

    test.forEach((e) => {
        totalPrice += e.price
    })
    res.json({
        message:"success",
        totalPrice : totalPrice
    })
})

router.get('/usage', (req, res) => {

    user.findOne()
        .then((use) => {
            console.log(use.usage[0].name)
        })
})

function shuffle(o){
	o.sort(function(){return 0.5-Math.random()});
	return o;
};



module.exports = router;