const request = require('request-promise');
const data = require('./bankData.json');


String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}

const extractSubscript = (stores) => {
    // console.log(stores)
    let result = []
    let inputDate = stores.조회일자

    stores.거래내역.forEach(store => {
        let data = store.거래점.split(' ');
   
        if (data.slice(-1) == '구독') {
            let inputTitle = data.slice(0, -1).join().replaceAll(',', ' ');
            post.findOne({title:inputTitle})
                .then((result) => {
                    let inputData = {
                        title: inputTitle,
                        date: inputDate,
                        cost: store.출금,
                        post_id: result._id
                    }
                    result.push(inputData);
                })
                .catch((err)=> {

                })
            // let inputData = {
            //     title: inputTitle,
            //     date: inputDate,
            //     cost: store.출금
            // }
            // // console.log(inputData);
            // result.push(inputData);
        }
    })
    
    return result
}


module.exports = {
    // 신한은행 월별 청구 내역 조회
    usageDetail: async (account) => {
        option = {
            uri: 'http://10.3.17.61:8080/v1/search/transaction/history',
            method: 'POST',
            body:{
                "dataHeader":{},
                "dataBody":{
                    "serviceCode":"D1110",
                    "정렬구분":"1",
                    "조회시작일":"2019.09.20",
                    "조회종료일":"2019.09.27",
                    "계좌번호":account
                }
            },
            json: true
        }

        await request.post(option, (err, res, body) => {
            try {
                if (err) {
                    console.log(`err: ${err}`)
                }
                console.log('신한은행 거래내역 API 조회 성공!');
                // console.log(body);  // api내역 조회
            } catch (err) {
                console.log(`err: ${err}`);
                
            }        
        })
        let result = extractSubscript(data.dataBody)            
        return result
    }
}