var express = require('express');
var app = express();
var fs = require("fs");
var cors = require('cors');
app.use(cors({origin: 'http://localhost:4200'}));
// app.use(cors({origin: '*'}));

app.get('/listUsers', function (req, res) {

  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      // res.status=400;
      // res.statusCode=400;
      // res.statusMessage="success";
      res.end( data );
   });
 })
 app.get('/', function (req, res) {   
    res.end('<html>Hello</html>');
 });
 
// var server = app.listen(8085, function () {
//    var host = server.address().address
//    var port = server.address().port
//    console.log("Example app listening at http://%s:%s", host, port)
// })
app.listen(8081, "127.1.1.1");
