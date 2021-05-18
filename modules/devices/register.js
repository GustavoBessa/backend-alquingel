const db = require('../../database/databaseActions');

module.exports = async function (req, res) {
    body = req.body;
    query = { "dispositivoId": body.dispositivoId };
    await db.insert(body, 'devices', query, function (status) {
        if (!status) {
            res.json({
                "err": "Device já cadastrado"
            });
        } else {
            res.json({
                "mgs": "Device Cadastrado"
            });
        }
    });

}