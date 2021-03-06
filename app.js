var http          = require('http');
var url           = require('url');
var path          = require('path');
var ejsLayouts    = require('express-ejs-layouts');
var bodyParser    = require('body-parser');
var express       = require("express");
var app           = express();

// Environment variables
var port          = process.env.PORT || 3000;
var key           = process.env.TRELLO_KEY;
var secret        = process.env.TRELLO_SECRET;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(ejsLayouts);
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.render('index');
});

app.listen(port);

console.log("Bulk card mover is up and running on port: " + port);
