var express = require('express');
var router = express.Router();
var post = require('../../model/post')
var user = require('../../model/user')

/* GET users listing. */

router.post('/', (req, res) => {
    var today = new Date();
    
    const screenTime = req.body.screenTime // {"titi":232, "tiie":23}

    user.findOne()
        .then((result) => {
            for(key2 in screenTime) {
                var count = 0
                var co = 0
                result.usage.forEach(e => {
                    if (e.name === key2) {
                        var mm = (today.getMonth()+1).toString()
                        
                        result.usage[co].time[mm] = (result.usage[co].time[mm] + screenTime[key2])
                        count +=1    
                        result.usage.push() // push를 해야만 데이터 저장이됨.. 이상함.
                    }
                    co+=1
                })
                if (count == 0) {
                    result.usage.push(
                        {
                            "name":key2,
                            "time":{
                                "7":0,
                                "8":0,
                                "9":0,
                                "10":0,
                                "11":screenTime[key2]
                            }
                        }
                    )
                }
            }
            var arr =  JSON.parse(JSON.stringify(result.usage))
            result.usage = arr
            console.log(result.usage)
            
            result.save()
                .then((re) => {
                    res.json({
                        message:re
                    })
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: err
            })
        })
  
})


module.exports = router;