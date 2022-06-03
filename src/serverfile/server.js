var express = require('express');
var app = express();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ".Sheld!ieic8265",
  database: "Stundentafel"
});

const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

app.get('/lehrer', function (req, res) {
  var query = connection.query("SELECT * FROM Lehrer", function(err, result, fields){
    if (err) throw err;
    // if there is no error, you have the result
    // iterate for all the rows in result
    /*
    var row;
    Object.keys(result).forEach(function(key) {
      row = result[key];
      console.log(row);
      console.log(row.Kuerzel);
      console.log(row.Abwesenheitsnotiz);
      console.log(row.Fortbildungs_ID)
      
    });
    res.send(row);
    */
    res.send(result);
  });
})

app.get('/klassen', function (req, res) {
  var query = connection.query("SELECT * FROM Klasse", function(err, result, fields){
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
})
/*
app.post('/addklasse', function requestHandler(req, res) {
  var query = connection.query("insert into Klasse(K_Bezeichnung, Kuerzel) VALUES ('FS192', 'MAR')", function(err, result){
    if (err) throw err;
    console.log(result);
    req.flash('success', 'Data added successfully!');
    res.redirect('/');
  });
})*/

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




