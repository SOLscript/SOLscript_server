const express = require('express');
const router = express.Router();
const { WebhookClient } = require('dialogflow-fulfillment');

const welcome = require('../../modules/dialogflow/intent/welcome');
const usingListMax = require('../../modules/dialogflow/intent/usingList-max');
const countScription = require('../../modules/dialogflow/intent/countScription');


router.post('/', async (req, res) => {
    const agent = await new WebhookClient({request: req, response: res});

    let intentMap = new Map();
    intentMap.set('CountScription', countScription);
    intentMap.set('UsingList-max', usingListMax);
    intentMap.set('Welcome', welcome);

    agent.handleRequest(intentMap);

});

module.exports = router;