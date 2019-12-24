const casual = require('casual');

const {arrayOf} = require('./utils');

const {UserError, Timeout} = require('./errors');

casual.define('user', function(id) {
    return {
        id,
        firstname: casual.first_name,
        lastname: casual.last_name,
        email: casual.email
    };
});

async function getUserIds() {
    return arrayOf(casual.integer(1, 20), () => casual.uuid);
}

async function getUsersById(ids = []) {
    return ids.map(id => {
        let user;

        switch (id.charAt(0)) {
            case '1':
                user = new UserError();
                break;
            case '3':
                user = new Timeout();
                break;
            default:
                user = casual.user(id);
        }

        return user;
    });
}

module.exports = {
    getUserIds,
    getUsersById
};
