var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const admin = require('firebase-admin');
var serviceAccount = require('./assets/george-personal-website-033b5221eeac.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

app.use(express.static('.'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/resume', function(req, res) {
  res.sendFile(path.join(__dirname+'/resume.html'));
});

var messagesRef = db.collection('messages');

app.post('/message', function(req, res) {
  var newMessanger = messagesRef.doc(new Date().toISOString());
  var setMessage = newMessanger.set({
    'name': req.body.name,
    'email': req.body.email,
    'message': req.body.message
  });
  res.send(req.body);
});


app.listen(process.env.PORT || 3000);
