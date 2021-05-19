const db = require('../../database/databaseActions');

module.exports = async function (req, res) {
    body = req.body;
    await db.list(body, 'devices', function (result) {
        console.log(result);
        res.json(result)
    });
}