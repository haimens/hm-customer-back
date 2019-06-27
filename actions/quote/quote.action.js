const func = require('od-utility');
const coreConn = require('../../services/core.conn');

class VNQuoteAction {

    static async registerQuoteRecordWithAddress(params, body, query, auth) {
        try {
            const {realm_token} = params;
            const record = await coreConn.coreRequest(
                'POST',
                ['quote', realm_token],
                {}, {}, body
            );

            console.log(record);
            return record;

        } catch (e) {
            throw e;
        }
    }

}

module.exports = VNQuoteAction;