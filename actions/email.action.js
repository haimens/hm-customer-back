const func = require('od-utility');
const coreConn = require('../services/core.conn');
const VNAction = require('./action.model');

class VNEmailAction extends VNAction {
    static async sendEmailWithCustomer(params, body, query, auth) {
        try {

            const {realm_token, customer_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'POST',
                ['email', 'send', 'customer', realm_token, customer_token],
                {}, {}, {...body, type: 1}
            );
        } catch (e) {
            throw e;
        }
    }
}

module.exports = VNEmailAction;