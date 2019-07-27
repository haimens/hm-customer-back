const express = require('express');
const router = express.Router();

const func = require('od-utility');
const VNPaymentAction = require('../../actions/payment.action');

router.get('/resource', async (req, res, next) => {

    try {
        const resBody = func.configSuccess(
            await VNPaymentAction.findPaymentResourceDetail(
                req.params, req.body, req.query, req.customer.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.post('/web/:order_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNPaymentAction.makePaymentForOrder(
                req.params, req.body, req.query, req.customer.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

module.exports = router;