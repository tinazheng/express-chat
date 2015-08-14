var alt = require('alt');
var chatActions = require('../actions/chatActions');

var messageStore = function() {
	return({
		constructor: function() {
			this.messages = [];
		},
		handleIncomingMessage: function(message) {
			this.messages = [message].concat(this.messages);
		},
		bindListeners: function() {
			return ({
				handleIncomingMessage: chatActions.ADD_MESSAGE
			});
		}

	});
}

module.exports = alt.createStore(messageStore, 'messageStore');