var express = require('express');
var app = express();
var fs = require('fs');

var x;

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

fs.readFile('index.html','utf8', function (err, data) {
 if (err) throw err;
 x=data;
});

app.get('/', function(request, response) {
  response.send(x);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
