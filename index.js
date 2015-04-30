var express = require('express')
var app = express();

// Load the fs (filesystem) module
var fs = require('fs');

// Read the contents of the file into memory.
fs.readFile('/home/ubuntu/bitstarter/index.html', function (err, logData);


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(fs);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
