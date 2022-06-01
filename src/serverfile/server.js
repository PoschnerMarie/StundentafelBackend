var express = require('express');
var app = express();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ".Sheld!ieic8265",
  database: "Stundentafel"
});

app.get('/test', function (req, res) {
  var query = connection.query("SELECT * FROM Lehrer", function(err, result, fields){
    if (err) throw err;
    // if there is no error, you have the result
    // iterate for all the rows in result
    Object.keys(result).forEach(function(key) {
      var row = result[key];
      console.log(row);
      console.log(row.Kuerzel);
      console.log(row.Abwesenheitsnotiz);
      console.log(row.Fortbildungs_ID)
    });
  });
  
  res.send('Hello World');
})

function connectMySQL(){
  connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  });
}

var server = app.listen(8081, function () {
  //var host = server.address().address
  var host = 'localhost';
  var port = server.address().port;
  
  connectMySQL();
  
  console.log("Example app listening at http://%s:%s", host, port);
})




