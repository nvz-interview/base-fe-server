const {users: usersModel} = require('../model');

async function getAlUserIds(req, res) {
    res.status(200).send(await usersModel.getUserIds());
}

async function getUsersById(req, res) {
    const {ids} = req.body;
    res.status(200).send(await usersModel.getUsersById(ids));
}

function apply(router) {
    router.get('/users(/)?', getAlUserIds);
    router.post('/users(/)?', getUsersById);
}

module.exports = apply;
