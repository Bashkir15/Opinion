class websockets {
	contructor() {
		'ngInject';

		this.conn = io.connect('http://localhost:8000')
		this.connect();
	}

	connect() {
		this.conn.on('connect', () => {
			console.log('connected');
		});

		this.conn.on('disconnect', () => {
			this.connect();
		});
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