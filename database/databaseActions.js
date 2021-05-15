require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const url = process.env.BD_CONNECTION_STRING;

module.exports.insert = function (obj, collection, _callback) {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("alquingelDB");
        dbo.collection(collection).find(obj).toArray(function (err, result) {
            if (result.length == 0) {
                dbo.collection(collection).insertOne(obj, function (err, res) {
                    if (err) throw err;
                    console.log("1 document inserted");
                    db.close();
                    _callback(true);
                });
            } else {
                db.close();
                _callback(false)
            }
        });
    });
}

module.exports.list = function (query, collection, _callback) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("alquingelDB");
        dbo.collection(collection).find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log('internal: ' + result);
            db.close();
            _callback(result);
        });
    });
}