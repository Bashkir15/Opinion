import mongoose from 'mongoose';

module.exports = (io) => {
	var User = mongoose.model("User");

	io.on('connection', (socket) => {
		console.log('yayayayayaya');
		
		var clearSocket = (data) => {
			User.findOne({_id: socket.userId}, (err, user) => {
				if (user) {
					delete socket.userId;
					user.socketId = '';
					user.loggedIn = false;
					user.save((err) => {
						console.log(user.name, 'disconnected');
					});
				}
			});
		};

		socket.on('online', (data) => {
			User.findOne({_id: data.userId}, (err, user) => {
				socket.userId = user._id;
				user.socketId = socket.id;
				user.loggedIn = true;
				user.save((err) => {
					console.log(user.name, 'is online');
				});
			});
		});

		//socket.on('disconnect', clearSocket);
		socket.on('logout', clearSocket);
	});
};