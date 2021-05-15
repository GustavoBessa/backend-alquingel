require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const url = process.env.BD_CONNECTION_STRING;

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("alquingelDB");
    var query = { name: "aaaaaaasweqw dasssssda" };
    dbo.collection("users").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});