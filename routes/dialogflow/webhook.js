const express = require('express');
const router = express.Router();
const { WebhookClient } = require('dialogflow-fulfillment');

const welcome = require('../../modules/dialogflow/intent/welcome');
const costIntentMonth = require('../../modules/dialogflow/intent/costIntentMonth');


// intentMap.set('Greeting', greeting);



const countScription = (agent) => {
    // DB접근 후 구독 리스트
}

const usingListMax = (agent) => {
    
}

const usingListMin = (agent) => {

}







router.post('/', async (req, res) => {
    const agent = await new WebhookClient({request: req, response: res});

    let intentMap = new Map();
    intentMap.set('CostIntent-month', costIntentMonth);
    intentMap.set('CountScription', countScription);
    intentMap.set('UsingList-max', usingListMax);
    intentMap.set('UsingList-min', usingListMin);
    intentMap.set('Welcome', welcome);

    agent.handleRequest(intentMap);

});






module.exports = router;