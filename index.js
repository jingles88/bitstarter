var express = require('express')
var app = express();

// Load the fs (filesystem) module
var fs = require('fs');

// Read the contents of the file into memory.
fs.readFile('example_log.txt', function (err, logData) {
  
// If an error occurred, throwing it will
  // display the exception and end our app.
  if (err) throw err;
});


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(fs);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
