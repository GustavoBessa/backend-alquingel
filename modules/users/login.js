const db = require('../../database/databaseActions');

module.exports = async function (req, res) {
    body = req.body;
    await db.list(body, 'users', function (result) {
        // console.log(user.password == body.password)
        // console.log("req:" + body.password)
        // console.log("db:" + user.password)
        if (result.length != 0) {
            user = result[0];
            console.log(result.length)
            if (user.password == body.password) {
                res.json({
                    "mgs": "Acesso autorizado"
                });
            }
        } else {
            res.json({
                "mgs": "Falha ao fazer login"
            });
        }
    });
}