const {users: usersModel} = require('../model');

async function getAlUserIds(req, res) {
    res.status(200).send(await usersModel.getUserIds());
}

async function getUsersByIds(req, res) {
    const {ids} = req.body;
    res.status(200).send(await usersModel.getUsersByIds(ids));
}

function apply(router) {
    router.get('/users(/)?', getAlUserIds);
    router.post('/users(/)?', getUsersByIds);
}

module.exports = apply;
