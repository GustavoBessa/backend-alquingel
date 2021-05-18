require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const url = process.env.BD_CONNECTION_STRING;

let query = { dispositivoId: 2 }
let newbody = {
    wifi: 100,
    voltagem: 2.981,
    nivel: 1,
    dispositivoId: 2
}
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("alquingelDB");
    dbo.collection("devices").findOneAndUpdate(
        query,
        { '$set': { newbody } },
        { new: true, upsert: true, returnOriginal: false },
        function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
            db.close();
        }
    );
});

