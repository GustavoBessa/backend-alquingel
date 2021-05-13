let yup = require('yup');
let clientModel = require('../models/client');
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
        res.json(body);
    }
}