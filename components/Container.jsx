/* the production version of this file lives in ~/public/build/js/bundle.js */

var React = require('react');
var MessageStore = require('../../stores/messageStore');
var ChatActions = require('../../actions/chatActions');
var alt = ('../../dispatcher');

var Container = React.createClass({
	getInitialState: function() { 
		return MessageStore.getState();
	},
	_onChange: function() {
		this.setState(MessageStore.getState());
	},
	componentDidMount: function() {
		MessageStore.listen(this._onChange);
		this.startSocketConnection(this.emitChatAction);
		console.log("container component mounted");
	},
	componentWillUnmount: function() {
		MessageStore.unlisten(this._onChange);
	},
	emitChatAction: function(data) {
		ChatActions.addMessage(data);
	},
	startSocketConnection: function(action) {
		startSocket(action);
	},
	render: function() {
		return(
			<ul id="socket-messages">
				Here are some messages!
				{MessageStore.getState().listOfMessages.map(function(message) {
					return(<li>{message}</li>);
				})}
			</ul>
		);
	}
});

React.render(<Container />, document.getElementById('react-content'));