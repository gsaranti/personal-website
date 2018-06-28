var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('.'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/resume', function(req, res) {
  res.sendFile(path.join(__dirname+'/resume.html'));
});

app.listen(8000);
