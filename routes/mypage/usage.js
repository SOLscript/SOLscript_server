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
                post.findOne({title:key2})
                    .then((popo) => {
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
                            console.log(popo.image)
                            result.usage.push(
                                {
                                    name:key2,
                                    image:popo.image,
                                    price:popo.price,
                                    type:popo.type,
                                    time:{
                                        "7":getRandomInt(200, 800),
                                        "8":getRandomInt(102, 1002),
                                        "9":getRandomInt(302, 2131),
                                        "10":getRandomInt(142, 1124),
                                        "11":screenTime[key2]
                                    }
                                }
                            )
                            
                        }
                    })
            }
            var arr =  JSON.parse(JSON.stringify(result.usage))
            result.usage = arr
            console.log(result)
            result.save()
                .then((re) => {
                    res.json({
                        message:re.usage
                    })
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: err
            })
        })
  
})
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }

module.exports = router;