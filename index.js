var express = require('express')
var app = express();
var x;
var fs = require('fs');
fs.readFile('/home/ubuntu/bitstarter/index.html', 'utf8' , function (err,data)
{
if (err)
{
x = broken;
}
x = data;
});

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(x);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
