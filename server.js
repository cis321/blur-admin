var compression = require('compression'); //libreria para comprimir los datos cuando los envia
var serveStatic = require('serve-static');//Manejo de los archivos de forma estatica
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var maxAge = 86400000; //Max age for caching, currently set to single day

// compress all requests
app.use(compression());
// Serve up content from public directory
app.use(serveStatic(__dirname + '/release', {'maxAge': maxAge}));
//app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 9051,
  function(){
    console.log('I am running on port ' + (process.env.PORT || 9051) + ' biatch');
  }
);
