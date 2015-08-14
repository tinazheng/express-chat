var express = require('express');
var app = express();
var port = 9000;

app.get('/', function(req, res) {
	res.send("hello world");
});

app.listen(port);
console.log("Listening on port " + port);