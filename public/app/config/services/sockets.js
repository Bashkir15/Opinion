class websockets {
	constructor() {
		'ngInject';
		this.conn = {};
		this.connect();
	}

	connect() {
		var socket = window.io();
		socket.on('connect', () => {
			console.log('connected');
		});

		socket.on('disconnect', () => {
			this.connect();
		});

		this.conn = socket;
	}

	reconnect() {
		this.conn.close();
		this.connect();
	}

	close() {
		this.conn.close();
	}
}

export default websockets