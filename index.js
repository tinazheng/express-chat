var express = require('express');
var app = express();
var port = 9000;

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile("index.html");
});

app.listen(port);
console.log("Listening on port " + port);