var alt = require('../alt');

var chatActions = function() {
	return({
		addMessage(message) {
			this.dispatch(message);
		}
	});
}

module.exports = alt.createActions(chatActions);