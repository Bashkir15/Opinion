import mongoose from 'mongoose';

module.exports = (io) => {
	var User = mongoose.model("User");
	var Chat = mongoose.model('Chat');

	io.on('connection', (socket) => {

		var clearSocket = (data) => {
			User.findOne({_id: socket.userId}, (err, user) => {
				if (user) {
					delete socket.userId;
					user.socketId = '';
					user.loggedIn = false;
					user.save((err) => {
					});
				}
			});
		};

		var notifyUser = (data) => {
			User.findOne({_id: data.userId}, (err, user) => {
				if (user) {
					socket.emit('newNotification', {userId: user._id});
				}
			});
		};

		var notifyMessaged = (data) => {
			Chat.findOne({_id: data.chatId})
			.populate('participants')
			.exec((err, chat) => {
				if (chat) {
					socket.emit('newChatNotification', {participants: chat.participants});
				}
			})
		}

		socket.on('online', (data) => {
			User.findOne({_id: data.userId}, (err, user) => {
				socket.userId = user._id;
				user.socketId = socket.id;
				user.loggedIn = true;
				user.save((err) => {
				});
			});
		});

		//socket.on('disconnect', clearSocket);
		socket.on('logout', clearSocket);

		socket.on('followed', notifyUser);
		socket.on('messaged', notifyUser);
		socket.on('chatMessaged', notifyMessaged);
	});
};