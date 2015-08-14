var alt = require('alt');
var chatActions = require('../actions/chatActions');

var messageStore = function() {
	return({
		constructor: function() {
			this.listOfMessages = ['hello', 'world'];
		},
		handleIncomingMessage: function(message) {
			this.listOfMessages = [message].concat(this.messages);
		},
		bindListeners: function() {
			return ({
				handleIncomingMessage: chatActions.ADD_MESSAGE
			});
		}

	});
}

module.exports = alt.createStore(messageStore, 'messageStore');