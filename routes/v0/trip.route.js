const express = require('express');
const router = express.Router();
const func = require('od-utility');

const VNTripAction = require('../../actions/trip.action');


router.get('/detail/:trip_token', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNTripAction.findTripDetail(
                req.params, req.body, req.query, req.customer.verify_info
            )
        );

        res.json(resBody);

    } catch (e) {
        next(e);
    }
});

router.get('/all/detail/customer/:customer_token', async (req, res, next) => {
    try {
    } catch (e) {
        next(e);
    }
});


router.patch('/detail/:trip_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNTripAction.modifyTripDetail(
                req.params, req.body, req.query, req.customer.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

router.patch('/operation/:trip_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNTripAction.modifyTripOperation(
                req.params, req.body, req.query, req.customer.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.post('/addon/:order_token/:trip_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNTripAction.registerTripAddon(
                req.params, req.body, req.query, req.customer.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.patch('/addon/:order_token/:trip_token/:addon_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNTripAction.modifyTripAddon(
                req.params, req.body, req.query, req.customer.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});



module.exports = router;