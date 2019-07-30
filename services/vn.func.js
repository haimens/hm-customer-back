const moment = require('moment');

const compareEarlier = (first_time, second_time) => {
    try {

        const first_moment = moment(first_time);
        const second_moment = moment(second_time);
        return first_moment.isBefore(second_moment);
    } catch (e) {
        throw e;
    }

};

const compareWithin = (first_time, second_time, amount, unit) => {

    try {
        const first_moment = moment(first_time);
        const second_moment = moment(second_time);

        return first_moment.isAfter(second_moment.add(amount, unit));
    } catch (e) {
        throw e;
    }
};

module.exports = {compareEarlier, compareWithin};