const func = require('od-utility');
const coreConn = require('../services/core.conn');
const utility = require('../services/vn.func');

class VNQuoteAction {

    static async registerQuoteRecordWithAddress(params, body, query, auth) {
        try {
            const {realm_token} = params;

            const {pickup_time} = body;

            if (!utility.compareWithin(pickup_time, new Date(), 8, 'hour')) func.throwError('PLEASE BOOK TRIP AT LEAST 8 HOUR AHEAD');


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