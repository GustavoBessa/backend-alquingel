let yup = require('yup');
let clientModel = require('../models/client');
function validate(obj) {
    let schema = clientModel;
    schema.isValid(obj, function (valid) {
        return valid; // => true
    });
}
module.exports = function (req, res) {
    body = req.body;

    console.log(validate(body));
    if (!validate(body)) {
        res.send('dados errados');
    } else {
        res.json(body);
    }
}