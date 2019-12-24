const types = require('./types');

class UserError extends Error {
    constructor() {
        super();
        this.type = types.ERROR;
    }
}

class Timeout extends Error {
    constructor() {
        super();
        this.type = types.TIMEOUT;
    }
}

module.exports = {
    UserError,
    Timeout
};
