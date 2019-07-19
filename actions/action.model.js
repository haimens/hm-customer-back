const func = require("od-utility");

class STAction {
    static checkRealmToken(auth = {}) {
        const {realm_token, customer_token} = auth;
        if (!realm_token) func.throwErrorWithMissingParam("realm_token");
        if (!customer_token) func.throwErrorWithMissingParam('customer_token');
        return {realm_token, customer_token};
    }
}

module.exports = STAction;
