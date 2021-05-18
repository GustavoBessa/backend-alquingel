let yup = require('yup');
let clientModel = require('../../models/client');
const db = require('../../database/databaseActions');

async function validate(obj) {
    let schema = clientModel;
    const valid = await schema.isValid(obj);
    return valid;
}
module.exports = async function (req, res) {
    body = req.body;

    console.log(await validate(body));
    if (!await validate(body)) {
        res.json({
            "err": "Campos Invalidos"
        });
    } else {
        await db.insert(body, 'users', body.email, function (status) {
            if (!status) {
                res.json({
                    "err": "Usuário já cadastrado"
                });
            } else {
                res.json({
                    "mgs": "Usuário Cadastrado"
                });
            }
        });
    }
}