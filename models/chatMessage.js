var mongoose = require('mongoose');

var chatMessageSchema = new mongoose.Schema({
	sender: String,
	recipient: String,
	messages: {
		message: {
			timestamp: string,
			text: String
		}
	}
});

module.exports = mongoose.model('chatMessage', chatMessageSchema);