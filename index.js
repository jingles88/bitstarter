var express = require('express')
var app = express();

var fs = require('fs');

fs.readFile('/home/ubuntu/bitstarter/index.html', function (err, logData);
{
var x = console.log(data);
}
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(fs);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
