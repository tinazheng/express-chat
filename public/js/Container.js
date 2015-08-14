var React = require('react');

var Container = React.createClass({displayName: "Container",
	getInitialState: function() { 
		return({
			listOfMessages: ['hello', 'world']
		});
	},
	componentDidMount: function() {
		this.startSocketConnection(this.handleIncomingMessage.bind(this));
		console.log("container component mounted")
	},
	handleIncomingMessage: function(message) {
		this.setState({
			listOfMessages: [message].concat(this.state.listOfMessages)
		});
	},
	startSocketConnection: function(action) {
		startSocket(action);
	},
	render: function() {
		return(
			React.createElement("ul", {id: "socket-messages"}, 
				"Here are some messages!", 
				this.state.listOfMessages.map(function(message) {
					return(
						React.createElement("li", null, message)
					);
				})
			)
		);
	}
});

React.render(React.createElement(Container, null), document.getElementById('react-content'));