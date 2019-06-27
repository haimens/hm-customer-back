const express = require('express');
const router = express.Router();

const func = require('od-utility');
const VNQuoteAction = require('../../actions/quote/quote.action');


router.post('/:realm_token', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNQuoteAction.registerQuoteRecordWithAddress(req.params, req.body, req.query),
            'QUOTE SUCCESS'
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

module.exports = router;