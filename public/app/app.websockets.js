function websockets() {
	var obj = {
		conn: {},
		connect: function() {
			var $this = this;
			var socket = new io.connect('http://localhost:8000');
			socket.on('connect', () => {
				console.log('connected');
			});

			socket.on('disconnect', () => {
				$this.connect();
			});

			this.conn = socket;
		},

		reconnect: function() {
			this.conn.close();
			this.connect();
		},

		close: function() {
			this.conn.close();
		},

		online: function (id) {
			this.conn.emit('online', {userId: id});
		},

		logout: function (id) {
			this.conn.emit('logout');
		}
	};

	obj.connect();
	return obj;
}

export default websockets