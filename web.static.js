var express = require('express');

var app = express.createServer(express.logger(), express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.redirect('/index.html');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
