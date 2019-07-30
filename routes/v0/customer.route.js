const express = require('express');
const router = express.Router();
const func = require('od-utility');

const VNCustomerAction = require('../../actions/customer.action');

router.post('/detail/:realm_token', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNCustomerAction.registerCustomerDetail(
                req.params, req.body, req.query
            )
        );

        res.json(resBody);

    } catch (e) {
        next(e);
    }
});


router.patch('/detail/:realm_token/:customer_token', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNCustomerAction.modifyCustomerDetail(
                req.params, req.body, req.query
            )
        );

        res.json(resBody);

    } catch (e) {
        next(e);
    }
});


router.patch('/info/:realm_token/:customer_token', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNCustomerAction.modifyCustomerInfo(
                req.params, req.body, req.query
            )
        );

        res.json(resBody);

    } catch (e) {
        next(e);
    }
});


router.get('/detail/:realm_token/:customer_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNCustomerAction.findCustomerDetail(
                req.params, req.body, req.query
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

module.exports = router;