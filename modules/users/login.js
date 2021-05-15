let yup = require('yup');
let clientModel = require('../../models/client');
const db = require('../../database/databaseActions');

module.exports = async function (req, res) {
    body = req.body;
    await db.list(body, 'users', function (result) {
        console.log("external: " + result)
        if (result.length != 0) {
            user = result[0];
            console.log(result.length)
            if (user.password == body.password) {
                res.json({
                    "mgs": "Acesso autorizado"
                });
            }
        }
        res.json({
            "mgs": "Falha ao fazer login"
        });
    });
}