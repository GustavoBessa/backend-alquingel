const db = require('../../database/databaseActions');

module.exports = async function (req, res) {
    body = req.body;
    query = { "dispositivoId": body.dispositivoId };
    await db.update(query, body, 'devices', function (status) {
        if (!status) {
            res.json({
                "err": "Ocorreu um erro"
            });
        } else {
            res.json({
                "mgs": "Nivel atualizado"
            });
        }
    });

}