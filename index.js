var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

fs = fs.require('fs')

app.get('/', function(request, response) {
  response.send(fs.readFile('index.html', 'utf8',  function (err, data) {
  if (err) throw err;
  console.log(data);
});)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
