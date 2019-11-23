const express = require('express');
const router = express.Router();
const shinhanCard = require('../../modules/api/shinhanCard');
const shinhanBank = require('../../modules/api/shinhanBank');


router.post('/card', async (req, res) => {
    const nxtQyKey = req.body.nxtQyKey;
    let result = await shinhanCard.usageDetail(nxtQyKey);
    
    console.log(result);
    res.json(result);
    
});

router.post('/bank', async(req, res) => {
    const account = req.body.account;
    
    let result = await shinhanBank.usageDetail(account);
    console.log(result);
    res.json(result);
})


module.exports = router;


