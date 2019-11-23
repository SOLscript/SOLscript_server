const express = require('express');
const router = express.Router();
const shinhanCard = require('../../modules/api/shinhanCard');
const shinhanBank = require('../../modules/api/shinhanBank');


router.post('/', async (req, res) => {
    const nxtQyKey = req.body.nxtQyKey;
    let result = await shinhanCard.usageDetail(nxtQyKey);
    // let result = await shinhanBank.usageDetail();

    console.log(result);
    res.json(result);
    
});


module.exports = router;


