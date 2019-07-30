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

        console.log('first_moment',first_moment.format('YYYY-MM-DD hh-mm'));
        console.log('second_moment',second_moment.format('YYYY-MM-DD hh-mm'));

        console.log('added',first_moment.add(amount, unit).format('YYYY-MM-DD hh-mm'));

        return first_moment.add(amount, unit).isBefore(second_moment);
    } catch (e) {
        throw e;
    }
};

module.exports = {compareEarlier, compareWithin};