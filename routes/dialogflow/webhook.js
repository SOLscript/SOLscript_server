const express = require('express');
const router = express.Router();
const { WebhookClient } = require('dialogflow-fulfillment');

let intentMap = new Map();
// intentMap.set('Greeting', greeting);

const welcome = (agent) => {
    let params = agent.request_.body.queryResult.parameters;

    let feel = params.Feel;
    let category = params.Category;
    let price = params.Price;    

    query = `감사합니다. 고객님. 선택해주신  '${feel}, ${category}, ${price}'  와 같은 키워드를 기준으로 추천 서비스를 만들겠습니다.`;
    agent.add(query);



}

const costIntentMonth = (agent) => {
    
    console.log(agent.request_.body.queryResult.parameters);
    agent.add('될까?')
}

const countScription = (agent) => {
    // DB접근 후 구독 리스트
}

const usingListMax = (agent) => {
    
}

const usingListMin = (agent) => {

}


intentMap.set('CostIntent-month', costIntentMonth);
intentMap.set('CountScription', countScription);
intentMap.set('UsingList-max', usingListMax);
intentMap.set('UsingList-min', usingListMin);
intentMap.set('Welcome', welcome);




router.post('/', (req, res) => {
    const agent = new WebhookClient({request: req, response: res});

    agent.handleRequest(intentMap);

});






module.exports = router;