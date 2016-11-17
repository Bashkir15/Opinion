import mongoose from 'mongoose'
import event from '../helpers/events'
import json from '../helpers/json'

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
					chat.doAccess({_id: userId});
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
		Chat.findOne({_id: req.params.chatId})
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

	obj.addParticipant = (req, res) => {
		Chat.findOne({_id: req.params.chatId})
		.populate('creator')
		.exec((err, chat) => {
			if (err) {
				return json.bad(err, res);
			}

			chat.participants.push = req.body.userId;
			chat.save((err) => {
				if (err) {
					return json.bad(err, res);
				}

				json.good(chat, res);
			});
		});
	};

	obj.markRead = (req, res) => {
		Chat.findOne({_id: req.params.chatId})
		.populate('creator')
		.populate('participants')
		.populate('messages')
		.populate('messages.creator')
		.exec((err, chat) => {


			chat.lastAccessed.map((item) => {
				if (req.user._id == item.user.toString()) {
					item.unread = 0;
				}
			});

			chat.save(() => {
				return json.good({
					record: chat
				}, res);
			})
		});
	};

	obj.list = (req, res) => {
		var user = req.user;

		var criteria = {
			participants: req.user
		};

		if (req.query && req.query.timestamp) {
			criteria.created = {$gte: req.query.timestamp};
		}

		if (req.query && req.query.filter) {
			delete criteria.created
			criteria.messages.message[0] = new RegExp(req.query.filter, 'i');
		}



		Chat.find(criteria, null, {sort: {modified: 1}})
		.populate('creator')
		.populate('participants')
		.populate('messages')
		.populate('messages.creator')
		.skip(parseInt(req.query.page) * global.config.settings.perPage)
		.limit(global.config.settings.perPage + 1)
		.exec((err, chats) => {
			if (err) {
				return json.bad(err, res);
			} else {
				chats.map((chat) => {
					chat.calculateUnreadFor(req.user);
					chat = chat.afterSave(req.user);
				});



				var morePages = global.config.settings.perPage < chats.length;

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


	obj.findUnread = (req, res) => {
		var numberOfUnread = 0;

		Chat.find({'lastAccessed.user': req.user._id, 'lastAccessed.unread': {$gt: 0}})
		.populate('creator')
		.populate('participants')
		.populate('messages')
		.populate('messages.creator')
		.exec((err, chats) => {
			chats.forEach((item) => {
				item.lastAccessed.forEach((access) => {
					if (req.user._id == access.user.toString()) {
						if (access.unread != 0) {
							numberOfUnread += 1;
						} 
					}
				});
			});

			return json.good({
				records: chats,
				unread: numberOfUnread
			}, res);
		});
	};

	obj.getSaved = (req, res) => {
		var criteria = {saves: req.params.userId};

		if (req.query && req.query.timestamp) {
			criteria.created = {
				$gte: req.query.timestamp
			};
		}

		Chat.find(criteria)
		.populate('creator')
		.populate('participants')
		.populate('messages')
		.populate('messages.creator')
		.skip(parseInt(req.query.page) * global.config.settings.perPage)
		.limit(global.config.settings.perPage)
		.exec((err, chats) => {
			if (err) {
				return json.bad(err, res);
			} else {
				chats.map((chat) => {
					chat.calculateUnreadFor(req.user);
					chat = chat.afterSave(req.user);
				});

				var morePages = global.config.settings.perPage < chats.length;

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

	obj.getRemoved = (req, res) => {
		var criteria = {deleted: req.params.userId};

		if (req.query && req.query.timestamp) {
			criteria.created = {
				$gte: req.query.timestamp
			};
		}

		Chat.find(criteria)
		.populate('creator')
		.populate('participants')
		.populate('messages')
		.populate('messages.creator')
		.skip(parseInt(req.query.page) * global.config.settings.perPage)
		.limit(global.config.settings.perPage)
		.exec((err, chats) => {
			if (err) {
				return json.bad(err, res)
			} else {
				console.log(chats);
				chats.map((chat) => {
					chat.calculateUnreadFor(req.user);
					chat = chat.afterSave(req.user);
				});

				var morePages = global.config.settings.perPage < chats.length;

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

	obj.single = (req, res) => {
		Chat.findOne({_id: req.params.chatId})
		.populate('creator')
		.populate('participants')
		.populate('messages')
		.populate('messages.creator')
		.exec((err, chat) => {
			if (err) {
				return json.bad(err, res);
			} else if (chat) {
				chat = chat.afterSave(req.user);

				return json.good({
					record: chat
				}, res);
			} else {
				return json.bad({message: 'Chat not found'}, res);
			}
		});
	};

	obj.save = (req, res) => {
		Chat.findOne({_id: req.params.chatId})
		.populate('creator')
		.populate('participants')
		.populate('messages')
		.exec((err, chat) => {
			if (err) {
				return json.bad(err, res);
			} else if (chat) {
				if (chat.saves.indexOf(req.user._id) != -1) {
					return json.bad({message: 'That chat is already saved'}, res);
				}

				chat.saves.push(req.user._id);
				chat.save((err, item) => {
					if (err) {
						return json.bad(err, res);
					}

					chat = chat.afterSave(req.user);

					json.good({
						record: item
					}, res);
				});
			}
		});
	};

	obj.unsave = (req, res) => {
		Chat.findOne({_id: req.params.chatId})
		.populate('creator')
		.populate('participants')
		.populate('messages')
		.exec((err, chat) => {
			if (err) {
				return json.bad(err, res);
			} else if (chat) {
				if (chat.saves.indexOf(req.user._id) != -1) {
					chat.saves.splice(chat.saves.indexOf(req.user._id), 1);
					chat.save((err, item) => {
						if (err) {
							return json.bad(err, res);
						}

						chat = chat.afterSave(req.user);

						json.good({
							record: item
						}, res);
					});
				} else {
					return json.bad({message: 'You need to save this chat first'}, res);
				}
			}
		});
	};

	obj.remove = (req, res) => {
		Chat.findOne({_id: req.params.chatId})
		.populate('creator')
		.populate('participants')
		.populate('messages')
		.exec((err, chat) => {
			if (err) {
				return json.bad(err, res);
			} else if (chat) {
				if (chat.deleted.indexOf(req.user._id) != -1) {
					return json.bad({message: 'You have aready removed that chat'}, res);
				}

				chat.deleted.push(req.user._id);
				chat.save((err, item) => {
					if (err) {
						return json.bad(err, res);
					}

					chat = chat.afterSave(req.user);

					json.good({
						record: chat
					}, res);
				});
			}
		});
	};

	obj.unremove = (req, res) => {
		Chat.findOne({_id: req.params.chatId})
		.populate('creator')
		.populate('participants')
		.populate('messages')
		.exec((err, chat) => {
			if (err) {
				return json.bad(err, res);
			} else if (chat) {
				if (chat.deleted.indexOf(req.user._id) != -1) {
					chat.deleted.splice(chat.deleted.indexOf(req.user._id), 1);
					chat.save((err, item) => {
						if (err) {
							return json.bad(err, res);
						}

						chat = chat.afterSave(req.user);

						json.good({
							record: item
						}, res);
					});
				} else {
					return json.bad({message: 'You need to delete that chat first'}, res);
				}
			}
		});
	};

	return obj;
};