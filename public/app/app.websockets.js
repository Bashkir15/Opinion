function websockets($rootScope) {
	'ngInject';
	
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

			socket.on('newNotification', (data) => {
				$rootScope.$broadcast('newNotification', data);
			});

			socket.on('newChatNotification', (data) => {
				$rootScope.$broadcast('newChatMessage', data);
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
		},

		follow: function(id) {
			this.conn.emit('followed', {userId: id});
		},

		unfollow: function(id) {
			this.conn.emit('unfollowed', {userId: id});
		},

		message: function(id) {
			this.conn.emit('messaged', {userId: id});
		},

		chatsMessage: function (id) {
			this.conn.emit('chatMessaged', {chatId: id});
		}
	};

	obj.connect();
	return obj;
}

export default websockets