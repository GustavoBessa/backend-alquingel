const express = require('express')
var bodyParser = require('body-parser')
const client = require('./routes/client');
const devices = require('./routes/devices');
const app = express()
const port = 8080

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.json({
        'msg': 'Hello'
    });
});
app.use('/client', client);
app.use('/devices', devices);


app.listen(port, () => {
    console.log(`API DISPONIVEL EM: http://localhost:${port}`)
})