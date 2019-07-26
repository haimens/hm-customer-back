const express = require('express');
const router = express.Router();
const cors = require("cors");

const {
    router_checker,
    token_machine,
    loginRoute,
    signupRoute,
    logoutRoute,
    forgetRoute
} = require("@odinternational/exodus_v2_qa");

router.use(cors());

router.use(
    "/",
    router_checker({
        token_type_zero: ['quote', 'address', 'flight', 'customer'],
        token_type_one: [],
        token_type_two: [],
        token_type_three: ['email', 'note', 'order', 'payment', 'quote', 'message', 'trip']
    })
);

router.use(
    token_machine(
        {
            allowSignup: false,
            havana_url: process.env.HAVANA_URL,
            instance_link: `${process.env.INSTANCE_LINK}/api/v0`,
            instance_name: process.env.INSTANCE_NAME
        },
        process.env.APP_TOKEN,
        process.env.APP_KEY
    )
);

// Exodus routes
router.use("/login", loginRoute);
router.use("/signup", signupRoute);
router.use("/logout", logoutRoute);
router.use("/forget", forgetRoute);


const quoteRoute = require('./quote.route');
const addressRoute = require('./address.route');
const customerRoute = require('./customer.route');
const emailRoute = require('./email.route');
const flightRoute = require('./flight.route');
const noteRoute = require('./note.route');
const orderRoute = require('./order.route');
const paymentRoute = require('./payment.route');
const smsRoute = require('./sms.route');
const tripRoute = require('./trip.route');



router.use('/quote', quoteRoute);
router.use('/address', addressRoute);
router.use('/customer', customerRoute);
router.use('/email', emailRoute);
router.use('/flight', flightRoute);
router.use('/note', noteRoute);
router.use('/order', orderRoute);
router.use('/payment', paymentRoute);
router.use('/message', smsRoute);
router.use('/trip', tripRoute);

// App routes

router.use('/', async (req, res, next) => {
    res.json({status: false, message: 'KING V0 INDEX REACHED'});
});

module.exports = router;
