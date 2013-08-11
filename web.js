var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());
var templateFile = './index.html';

//var textBuffer = fs.readFileSync(templateFile);
//var text = textBuffer.toString();
var text = 'bla';

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
