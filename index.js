var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
var chatMessage = require('./models/chatMessage');
var config = require('./config');

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
	console.info('Error: Could not connect to MongoDB.');
});
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	socket.on('chat message', function(msg) {
		io.emit('chat message', msg);
	})
	socket.emit('chatMessage', "hey there, this is a message");
})

http.listen(3000, function() {
	console.log('listening on *:3000');
});

