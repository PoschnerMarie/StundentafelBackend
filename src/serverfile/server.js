var express = require('express');
var app = express();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ".Sheld!ieic8265",
  database: "Stundentafel"
});

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   //var host = server.address().address
   var host = 'localhost';
   var port = server.address().port
   console.log(host)
   
   console.log("Example app listening at http://%s:%s", host, port)



   connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });
})




