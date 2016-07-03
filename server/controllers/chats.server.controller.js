import mongoose from 'mongoose';
import json from '../helpers/json';
var Chat = mongoose.model('Chat');
var config = require('../config/env/' + (process.env.NODE_ENV || 'development'));

module.exports = function() {
	var obj = {};

	obj.create = function (req, res) {
		if (req.body.participants) {
			req.body.participants.sort(function (a, b) {
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
		.exec(function (err, chat) {
			if (err) {
				return json.bad(err, res);
			} else if (chat) {
				chat.doAccess(req.user);
				chat.calculateUnread();
				chat.save(function (err, chat) {
					return json.good({
						record: chat
					}, res);
				});
			} else {
				var chat = new Chat(req.body);
				chat.creator = req.user._id;

				req.body.participants.map(function (userId) {
					chat.doAccess({_id: userId});
				});

				chat.save(function (err) {
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

	obj.message = function (req, res) {
		Chat.findOne({_id: req.params.chatId})
		.populate('creator')
		.populate('participants')
		.populate('messages')
		.populate('messages.creator')
		.exec(function (err, chat) {
			if (err) {
				return json.bad(err, res);
			} else if (chat) {
				chat.messages.unshift({
					message: req.body.message,
					creator: req.user._id
				});

				chat.doAccess(req.user);
				chat.calculateUnread();
				chat.save(function (err, chat) {
					chat.populate('messages messages.creator', function (err, chat) {
						return json.good({
							record: chat
						}, res);
					});
				});
			} else {
				return json.bad({message: 'Sorry, that chat could not be found'}, res);
			}
		});
	};

	obj.list = function (req, res) {
		var user = req.user;

		var criteria = {
			participants: req.user
		};

		Chat.find(criteria, null, {sort: {modified: 1}})
		.populate('creator')
		.populate('participants')
		.skip(parseInt(req.query.page) * config.settings.perPage)
		.limit(config.settings.perPage + 1)
		.exec(function (err, chats) {
			chats.map(function (chat) {
				chat.calculateUnreadFor(req.user);
			});

			if (err) {
				return json.bad(err, res);
			} else {
				var morePages = config.settings.perPage < chats.length;

				if (morePages) {
					chats.pop();
				}

				json.good({
					records: chats,
					morePages: morePages
				}, res);
			}
		});
	};

	obj.single = function (req, res) {
		Chat.findOne({_id: req.params.chatId})
		.populate('creator')
		.populate('participants')
		.populate('messages')
		.populate('messages.creator')
		.exec(function (err, chat) {
			if (err) {
				return json.bad(err, res);
			} else if (chat) {
				return json.good({
					record: chat
				}, res);
			} else {
				return json.bad({message: 'Sorry, that chat could not be found'}, res);
			}
		});
	};

	return obj;
};