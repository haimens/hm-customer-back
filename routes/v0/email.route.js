const express = require('express');
const router = express.Router();

const func = require('od-utility');


const VNEmailAction = require('../../actions/email.action');


router.post('/send/customer/:customer_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNEmailAction.sendEmailWithCustomer(
                req.params, req.body, req.query, req.customer.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

module.exports = router;