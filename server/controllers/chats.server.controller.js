import mongoose from 'mongoose'
import event from '../helpers/events'

var Chat = mongoose.model("Chat");

module.exports = () => {
	var obj = {};
	
	obj.create = (req, res) => {
		if (req.body.participants) {
			req.body.participants.sort((a, b) => {
				return a < b;
			});
		}

		var criteria = {};

		if (req.body.chatId) {
			criteria = {
				_id: req.body.chatId
			};
		} else {
			criteria = {
				participants: req.body.participants
			};
		}

		Chat.findOne(criteria)
		.populate('creator')
		.populate('participants')
		.populate('messages')
		.populate('messages.creator')
		.exec((err, chat) => {
			if (err) {
				return json.bad(err, res);
			} else if (chat) {
				chat.doAccess(req.user);
				chat.calculateUnread();
				chat.save((err, chat) => {
					if (err) {
						return json.bad(err, res);
					}

					json.good({
						record: chat
					}, res);
				});
			} else {
				var chat = new Chat(req.body);
				chat.creator = req.user._id;

				req.body.participants.map((userId) => {
					chat.doAccess(_id: userId);
				});

				chat.save((err) => {
					if (err) {
						return json.bad(err, res);
					}

					json.good({
						record: chat
					}, res);
				});
			}
		});
	};

	obj.message = (req, res) => {
		chat.findOne({_id: req.params.chatId})
		.populate('creator')
		.populate('participants')
		.populate('messages')
		.populate('messages.creator')
		.exec((err, chat) => {
			if (err) {
				return json.bad(err, res);
			} else if (chat) {
				chat.messages.unshift({
					message: req.body.message,
					creator: req.user._id
				});

				chat.doAccess(req.user);
				chat.calculateUnread();
				chat.save((err, chat) => {
					chat.populate('messages messages.creator', (err, chat) => {
						event.trigger('chatMessage', {chat: chat, message: chat.messages[0], actor: req.user});
						json.good({
							record: chat
						}, res);
					});
				});
			} else {
				return json.bad({message: 'Chat not found'}, res);
			}
		});
	};

}