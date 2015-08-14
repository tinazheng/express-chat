var alt = require('../alt');

var chatActions = function() {
	return({
		handleIncomingMessage(message) {
			this.dispatch(message);
		}
	});
}

module.exports = alt.createActions(chatActions);