var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var mysql      = require('mysql');
//Verbindung zur Datenbank
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ".Sheld!ieic8265",
  database: "Stundentafel"
});

const cors = require('cors')
//Erreichbarkeit des Frontends unter folgender URL
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions))

//Endpoint, um Daten der Tabelle Lehrer aus der Datenbank abzurufen
app.get('/lehrer', function (req, res) {
  var query = connection.query("SELECT * FROM Lehrer", function(err, result, fields){
    if (err) throw err;
    res.send(result);
  });
})

//Endpoint, um Daten der Tabelle Klasse aus der Datenbank abzurufen
app.get('/klassen', function (req, res) {
  var query = connection.query("SELECT * FROM Klasse", function(err, result, fields){
    if (err) throw err;
    //console.log(result);
    res.send(result);
  });
})

//definiert wie body verarbeitet werden soll
app.use(bodyParser.json());
//Endpoint um Eintrag in Datenbank zu aktualisieren
app.post('/addklassenlehrer', function (req, res) {
  connection.query('UPDATE klasse SET `Kuerzel`=? where `K_Bezeichnung`=?', [req.body.Kuerzel,req.body.K_Bezeichnung], function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});

//Verbidnung von Node Express Server und MySQL Datenbank
function connectMySQL(){
  connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  });
}

//Definitionen zum Starten des Servers
var server = app.listen(8081, function () {
  var host = 'localhost';
  var port = server.address().port;
  connectMySQL();
  console.log("Example app listening at http://%s:%s", host, port);
})




