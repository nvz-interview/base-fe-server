const morgan = require('morgan');
const compression = require('compression');

function middleware() {
    return [morgan('dev'), compression()];
}

module.exports = middleware;
