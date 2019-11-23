var express = require('express');
var router = express.Router();
var post = require('../../model/post')
var user = require('../../model/user')

/* GET users listing. */
// 캘린더 캘린더



router.get('/calender/:month', (req, res) => {

var test = [
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
    test.forEach((n) => {
        console.log(n)
    })

    const month = req.params.month
    // const date = req.query.date
    money = 0
    var arr = []
    test.forEach((e) => {
        console.log("ee")
        var mo = e.date.split('-')
        if (mo[1] == month) {
            money += e.price
            if (arr[0] == undefined) {
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
                        n.subList.push(e)
                        return true
                    } else{
                        arr.push(
                            {
                                date: `2019-${month}-${mo[2]}`,
                                subList: [e]
                            })
                       return false 
                    }
                })
            }
        }
    })

    res.json({
        message:arr
    })

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
})

router.get('/search', (req, res) => {

    const date = req.query.date

    post.find({date:date})
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


module.exports = router;