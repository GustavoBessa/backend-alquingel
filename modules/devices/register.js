const db = require('../../database/databaseActions');
const { v4: uuidv4 } = require('uuid');

module.exports = async function (req, res) {
    body = req.body;
    dispositivoId = uuidv4();
    console.log(dispositivoId)
    query = { "dispositivoId": dispositivoId };
    body.dispositivoId = dispositivoId;
    console.log(body.dispositivoId)
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