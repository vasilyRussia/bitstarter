var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var text = new Buffer(100);

text.write(fs.readFileSync('index.html'));

var chartext = text.toString();

app.get('/', function(request, response) {
  response.send("New");
port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
