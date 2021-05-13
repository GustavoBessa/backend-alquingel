let yup = require('yup');

const name = yup.string()
    .max(255);

const email = yup.string()
    .email();

const password = yup.string()
    .min(12)
    .max(32)

const clientModel = yup.object().shape({
    name: name.required(),
    email: email.required(),
    password: password.required(),
})

module.exports = clientModel;