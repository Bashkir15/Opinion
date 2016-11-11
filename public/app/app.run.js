function runAway($rootScope) {
	connect();

	function connect() {
		var socket = window.io();
		socket.on('connect', () => {
			console.log('connected');
		});
	}
}

export default runAway