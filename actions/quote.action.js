const func = require('od-utility');
const coreConn = require('../services/core.conn');

class VNQuoteAction {

    static async registerQuoteRecordWithAddress(params, body, query, auth) {
        try {
            const {realm_token} = params;


            return await coreConn.coreRequest(
                'POST',
                ['quote', 'detail', realm_token],
                {}, {}, body
            );

        } catch (e) {
            throw e;
        }
    }

}

module.exports = VNQuoteAction;