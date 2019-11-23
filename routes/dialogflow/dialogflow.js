const express = require('express');
const router = express.Router();
const fs = require('fs')
const Bot = require('../../modules/dialogflow/bot');

const projectid = 'mark-1-259111';
const keyFile =  __dirname + '/../../config/mark-1-259111-3599b21ab557.json';

const bot = new Bot(projectid, keyFile);


router.post('/', async (req, res) => {
    const queryTxt = req.body.queryTxt;
    // const sessionId = req.body.sessionId // 임시

    try {
        responses = await bot.detectTextIntent(queryTxt);        
        
    } catch (err) {
        console.log(`dialog err: ${err}`);
        res.send(`dialog err: ${err}`);
    }
});

module.exports = router;