var express = require('express')
var app = express();
var fs = require('fs');
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

fs.readFile('/home/ubuntu/bitstarter/index.html', 'utf8' , function (err,data)
{
if (err) throw err;
var x = data;
app.get('/', function(request, response) {
response.send(data);
}
});

//app.set('port', (process.env.PORT || 5000))
//app.use(express.static(__dirname + '/public'))

//app.get('/', function(request, response) {
//  response.send(data);
//});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
