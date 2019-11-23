const request = require('request-promise');
const data = require('./cardData.json');
const post = require('../../model/post')
const user = require('../../model/user')


String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}

const extractSubscript = (stores) => {
    // console.log(stores)
    let result = []

    stores.forEach(store => {
        let data = store.useMchtNm.split(' ');
    
        if (data.slice(-1) == '구독') {
            let inputTitle = data.slice(0, -1).join().replaceAll(',', ' ');
            console.log(inputTitle);
            
            
            post.findOne({title:inputTitle})
                .then((findUser) => {
                    let inputData = {
                        title: inputTitle,
                        date: store.useD, // 구독 날짜
                        cost: store.slsAmt,
                        post_id : findUser._id
                    }
                    result.push(inputData);
                })
                .catch((err)=> {
                    
                })
        }
    })
    
    return result
}


module.exports = {
    registCard: async (cardNoEnc, validTrm, cvv2, passwd) => {
        // 암호화 필요
        option = {
            uri: 'http://10.3.17.61:8081/v1/authorizations/visaansimclickcardforapplycard',
            method: 'POST',
            body: {
                "dataHeader":{},
                "dataBody":{
                    "cardNoEnc": "9986D78CABB0F61D4D0DC7C2ED1633D90B65906B4FFFA403656225BBA2050380",
                    "passwd": "6904MDIwGhMABB%2FENC%2Fq8F%2Ftkqt09eT0IzpnGi%2B0A%3D%3D",
                    "cvv2": "4132MDIwGhMABB%2FENC%2F3zAfsnPJhUoJTgDGTSS8vQ%3D%3D",
                    "validTrm": "201808"
                }
            },
            json: true
        }
        const result = await request.post(option, (err, res, body) => {
            try {
                if (err) console.log(`err: ${err}`)
                console.log('신한카드 등록 API 성공!');  
            } catch (err) {
                if (err) console.log(`err: ${err}`)
                console.log(`err: ${err}`);
            }
        })
        return result
    },
    // 신용카드 월별 청구 내역 조회
    usageDetail: async (nxtQyKey) => {
        option = {
            uri: 'http://10.3.17.61:8081/v1/usecreditcard/searchmonthlybillingdetail',
            method: 'POST',
            body:{
                "dataHeader":{},
                "dataBody":{
                    "nxtQyKey":nxtQyKey,
                    "setlDay":"20190722",
                    "setlTypeNo":"0002"
                }
            },
            json: true
        }

        const localResult = await request.post(option, (err, res, body) => {
            try {
                if (err) console.log(`err: ${err}`)
            } catch (err) {
                console.log(`err: ${err}`);
            }
            return body
        })
        // local로부터 data를 받아옴.
        console.log('신한카드 거래내역 API 조회 성공!');               
        let result = extractSubscript(data.dataBody.grp001);
        return result
    }
}