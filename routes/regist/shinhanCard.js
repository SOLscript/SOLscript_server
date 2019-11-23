const express = require('express');
const router = express.Router();
// const crypto = require('crypto');

const shinhanCard = require('../../modules/api/shinhanCard');

router.post('/', async (req, res) => {
    const cardNoEnc = req.body.cardNoEnc;
    const validTrm = req.body.validTrm;
    const cvv2 = req.body.cvv2;
    const passwd = req.body.passwd;

    // let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

    let result = await shinhanCard.registCard(cardNoEnc, validTrm, cvv2, passwd);
    res.send(result);
});

module.exports = router;