/* the production version of this file lives in ~/public/build/js/bundle.js */

var React = require('react');
var MessageStore = require('../../../stores/messageStore');

var Container = React.createClass({
	getInitialState: function() { 
		return MessageStore.getState();
	},
	componentDidMount: function() {
		MessageStore.listen(this.onChange);
		this.startSocketConnection(this.handleIncomingMessage.bind(this));
		console.log("container component mounted")
	},
	componentWillUnmount: function() {
		MessageStore.unlisten(this.onChange);
	},
	startSocketConnection: function(action) {
		startSocket(action);
	},
	render: function() {
		return(
			<ul id="socket-messages">
				Here are some messages!
				{this.state.listOfMessages.map(function(message) {
					return(
						<li>{message}</li>
					);
				})}
			</ul>
		);
	}
});

React.render(<Container />, document.getElementById('react-content'));