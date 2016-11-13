function runAway($rootScope) {
	var socket = io.connect('http://localhost:8000');

	socket.on('connect', () => {
		console.log('yay');
	});
}

export default runAway