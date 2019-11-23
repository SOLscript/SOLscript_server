var express = require('express');
var router = express.Router();
var post = require('../../model/post')
var user = require('../../model/user')

/* GET users listing. */
// 캘린더 캘린더

var test = [
    {
        title:"you",
        category:"music",
        price: 4003,
        type:"month",
        date: "2019-11-03"
    },
    {
        title:"you1",
        category:"music",
        price: 4003,
        type:"month",
        date: "2019-11-03"
    },
    {
        title:"you2",
        category:"etc",
        price: 4003,
        type:"month",
        date: "2019-11-05"
    },
    {
        title:"you3",
        category:"digital",
        price: 4003,
        type:"month",

        date: "2019-11-05"
    },
    {
        title:"you4",
        category:"music",
        price: 4003,
        type:"month",

        date: "2019-11-07"
    }
]

router.get('/calender/:month', (req, res) => {

    const month = req.params.month
    // const date = req.query.date
    money = 0
    var arr = []
    test.forEach((e) => {
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
    })

    res.json({
        message:arr,
        totalMoney : money
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


module.exports = router;