var alt = require('../dispatcher');
var chatActions = require('../actions/chatActions');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MessageStore = function MessageStore() {
	_classCallCheck(this, MessageStore);
	this.listOfMessages = ['hello', 'world'];
	this.onIncomingMessage = function (message) {
		console.log('message store recognizes incoming message');
		this.listOfMessages = [message].concat(this.listOfMessages);
	};
	this.bindListeners({
		onIncomingMessage: chatActions.ADD_MESSAGE
	});
};


module.exports = alt.createStore(MessageStore);