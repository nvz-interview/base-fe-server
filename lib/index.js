const express = require('express');

const Logger = require('./utils/logger');
const middleware = require('./middleware/');

const app = express();

const PORT = 8080;

app.get('/healthz', (req, res) => {
    res.send({result: 'OK'});
});

app.use(middleware());

app.listen(PORT, err => {
    if (!err) {
        Logger.info(`Listening on port ${PORT}`);
    } else {
        Logger.error(err);
    }
});
