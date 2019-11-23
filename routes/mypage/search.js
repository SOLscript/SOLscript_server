var express = require('express');
var router = express.Router();
var post = require('../../model/post')
var user = require('../../model/user')

/* GET users listing. */
// 캘린더 캘린더

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
    {
        title:"Youtube",
        category:"entertain",
        price: 9900,
        image:"https://modoctest.s3.ap-northeast-2.amazonaws.com/1574506673972.png",
        type:"month",
        date: "2019-10-03"
    },
    {
        title:"Naver Cloud",
        category:"digital",
        price: 8000,
        image: "https://modoctest.s3.ap-northeast-2.amazonaws.com/1574507027962.jpeg",
        type:"month",
        date: "2019-10-03"
    },
    {
        title:"Google Cloud",
        category:"digital",
        price: 3000,
        type:"month",
        image:"https://modoctest.s3.ap-northeast-2.amazonaws.com/1574507149865.jpeg",
        date: "2019-10-11"
    },
    {
        title:"Netflix",
        category:"entertain",
        price: 8000,
        type:"month",
        image:"https://modoctest.s3.ap-northeast-2.amazonaws.com/1574518752319.jpg",
        date: "2019-10-23"
    },
    {
        title:"풀무원",
        category:"food",
        price: 9900,
        image:"https://modoctest.s3.ap-northeast-2.amazonaws.com/1574519728123.png",
        type:"month",
        date: "2019-10-14"
    },
    {
        title:"Youtube",
        category:"entertain",
        price: 9900,
        image:"https://modoctest.s3.ap-northeast-2.amazonaws.com/1574506673972.png",
        type:"month",
        date: "2019-09-03"
    },
    {
        title:"Naver Cloud",
        category:"digital",
        price: 8000,
        image: "https://modoctest.s3.ap-northeast-2.amazonaws.com/1574507027962.jpeg",
        type:"month",
        date: "2019-09-11"
    },
    {
        title:"Google Cloud",
        category:"digital",
        price: 3000,
        type:"month",
        image:"https://modoctest.s3.ap-northeast-2.amazonaws.com/1574507149865.jpeg",
        date: "2019-09-11"
    },
    {
        title:"Netflix",
        category:"entertain",
        price: 8000,
        type:"month",
        image:"https://modoctest.s3.ap-northeast-2.amazonaws.com/1574518752319.jpg",
        date: "2019-09-23"
    },
    {
        title:"풀무원",
        category:"food",
        price: 9900,
        image:"https://modoctest.s3.ap-northeast-2.amazonaws.com/1574519728123.png",
        type:"month",
        date: "2019-09-14"
    },
    {
        title:"Youtube",
        category:"entertain",
        price: 9900,
        image:"https://modoctest.s3.ap-northeast-2.amazonaws.com/1574506673972.png",
        type:"month",
        date: "2019-08-03"
    },
    {
        title:"Naver Cloud",
        category:"digital",
        price: 8000,
        image: "https://modoctest.s3.ap-northeast-2.amazonaws.com/1574507027962.jpeg",
        type:"month",
        date: "2019-08-03"
    },
    {
        title:"Google Cloud",
        category:"digital",
        price: 3000,
        type:"month",
        image:"https://modoctest.s3.ap-northeast-2.amazonaws.com/1574507149865.jpeg",
        date: "2019-08-11"
    },
    {
        title:"Netflix",
        category:"entertain",
        price: 8000,
        type:"month",
        image:"https://modoctest.s3.ap-northeast-2.amazonaws.com/1574518752319.jpg",
        date: "2019-08-20"
    },
    {
        title:"풀무원",
        category:"food",
        price: 9900,
        image:"https://modoctest.s3.ap-northeast-2.amazonaws.com/1574519728123.png",
        type:"month",
        date: "2019-08-14"
    },
    {
        title:"Youtube",
        category:"entertain",
        price: 9900,
        image:"https://modoctest.s3.ap-northeast-2.amazonaws.com/1574506673972.png",
        type:"month",
        date: "2019-07-03"
    },
    {
        title:"Naver Cloud",
        category:"digital",
        price: 8000,
        image: "https://modoctest.s3.ap-northeast-2.amazonaws.com/1574507027962.jpeg",
        type:"month",
        date: "2019-07-03"
    },
    {
        title:"Google Cloud",
        category:"digital",
        price: 3000,
        type:"month",
        image:"https://modoctest.s3.ap-northeast-2.amazonaws.com/1574507149865.jpeg",
        date: "2019-07-11"
    },
    {
        title:"Netflix",
        category:"entertain",
        price: 8000,
        type:"month",
        image:"https://modoctest.s3.ap-northeast-2.amazonaws.com/1574518752319.jpg",
        date: "2019-07-20"
    },
    {
        title:"풀무원",
        category:"food",
        price: 9900,
        image:"https://modoctest.s3.ap-northeast-2.amazonaws.com/1574519728123.png",
        type:"month",
        date: "2019-07-14"
    },
]

router.get('/calender/:month', (req, res) => {
    const month = req.params.month
    // const date = req.query.date
    money = 0
    var arr = []
    test.forEach((e) => {
        console.log(e)
        var mo = e.date.split('-')
        if (mo[1] == month) {
            money += e.price
                if (arr[0] == undefined) {
                    console.log("ee1")
                    arr.push(
                        {
                            date: `2019-${month}-${mo[2]}`,
                            subList: [e]
                        }
                        )
                } else {
                    arr.some((n) => {
                        console.log(e.date)
                        if (n.date == e.date){
                            console.log("얄루")
                            n.subList.unshift(e)
                            return true
                        } else{
                            arr.unshift(
                                {
                                    date: `2019-${month}-${mo[2]}`,
                                    subList: [e]
                                })
                            return true 
                        }
                    })
                }
            }
            
    // user.findOne({}).sort({date:1})
    //     .then((result) => {
    //         result.subList.forEach((e) => {
    //             console.log(e)
    //             var mo = e.date.split('-')
    //             if (mo[1] == month) {
    //                 money += e.price
    //                 post.findOne({_id:e._id})
    //                     .then((output) => {
    //                         if (arr[0] == undefined) {
    //                             console.log("ee1")
    //                             arr.push(
    //                                 {
    //                                     date: `2019-${month}-${mo[2]}`,
    //                                     subList: [
    //                                         {
    //                                            title: output.title,
    //                                            price: output.price,
    //                                             type: output.type,
    //                                             image: output.image,
    //                                             date: e.date
    //                                         }
    //                                     ]
    //                                 }
    //                                 )
    //                         } else {
    //                             arr.some((n) => {
    //                                 console.log(e.date)
    //                                 if (n.date == e.date){
    //                                     console.log("얄루")
    //                                     n.subList.unshift({
    //                                         title: output.title,
    //                                         price: output.price,
    //                                          type: output.type,
    //                                          image: output.image,
    //                                          date: e.date
    //                                      })
    //                                     return true
    //                                 } else{
    //                                     arr.unshift(
    //                                         {
    //                                             date: `2019-${month}-${mo[2]}`,
    //                                             subList: [{
    //                                                 title: output.title,
    //                                                 price: output.price,
    //                                                  type: output.type,
    //                                                  image: output.image,
    //                                                  date: e.date
    //                                              }]
    //                                         })
    //                                    return true 
    //                                 }
    //                             })
    //                         }
    //                     })
                    
    //             }
    //         })
        
        //     res.json({
        //         message:arr,
        //         totalMoney : money
        //     })
        // })
    // user.find({}).sort({date:1})
    //     .then((result) => {
            
    //         result.subList.forEach(e => {
    //             let mo =  e.date.split('-')
    //             if (mo[1] == month) {
    //                 money += e.price
                    
    //             } 

    //         });

    //         res.json({
    //             message:"success",
    //             data:{

    //             }
    //         })
    //     })
}


)
res.json({
    message:arr,
    totalMoney : money
})
})

router.get('/cost/:month', (req, res) => {

    totalPrice = 0
    var arr = []

    test.forEach((e) => {
        totalPrice += e.price
        if (arr[0] == undefined) {
            arr.push(
                    {
                        category: e.category,
                        price: e.price
                    }
                )
        } else {
            count = 0
            arr.some((n) => {
                if (n.category == e.category){
                    n.price += e.price
                    count += 1
                    return true
                }else{
                }
            })
            if (count == 0) {
                arr.push(
                    {
                        category: e.category,
                        price: e.price
                    }
                )
            }
        }
    })

    res.json({
        message:arr,
        totalPrice : totalPrice
    })


    // user.find({}).sort({date:1})
    //     .then((result) => {
            
    //     })
})


module.exports = router;