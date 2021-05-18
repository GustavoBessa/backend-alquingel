require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const url = process.env.BD_CONNECTION_STRING;

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("alquingelDB");
    var query = {};
    dbo.collection("devices").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result.length);
        for (var i = 0; i < result.length; i++) {
            dbo.collection("devices").deleteOne(query, function (err, obj) {
                if (err) throw err;
                console.log("1 document deleted");
            });
        }
        db.close();
    });
});