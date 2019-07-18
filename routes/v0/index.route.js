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
        token_type_zero: ['quote'],
        token_type_one: [],
        token_type_two: [],
        token_type_three: ['address', 'customer', 'email', 'flight', 'note', 'order', 'payment', 'quote', 'message', 'trip']
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


router.use('/quote', quoteRoute);

// App routes

router.use('/', async (req, res, next) => {
    res.json({status: false, message: 'KING V0 INDEX REACHED'});
});

module.exports = router;
