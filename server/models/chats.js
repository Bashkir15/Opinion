import mongoose from 'mongoose'
import escape from 'lodash.escape'

var escapeProperty = (value) => {
	return escape(value);
};

var chatsSchema = new mongoose.Schema({
	created: {
		type: Date,
		default: Date.now
	},

	modified: {
		type: Date,
		default: Date.now
	},

	lastAccessed: [{
		accessed: {
			type: Date,
			default: Date.now
		},

		 user: {
			type: mongoose.Schema.ObjectId,
			required: true,
			ref: 'User'
		}, 

		unread: Number
	}],


	creator: {
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'User'
	},

	unread: Number,

	messages: [{
		created: {
			type: Date,
			default: Date.now
		},

		creator: {
			type: mongoose.Schema.ObjectId,
			required: true,
			ref: 'User'
		},

		message: String
	}],

	participants: [{
		type: mongoose.Schema.ObjectId,
		required: false,
		ref: 'User'
	}],

	saves: [{
		type: mongoose.Schema.ObjectId,
		required: false,
		ref: 'User'
	}],

	saved: {
		type: Boolean,
		default: false
	},

	deleted: [{
		type: mongoose.Schema.ObjectId,
		required: false,
		ref: 'User'
	}],

	isDeleted: {
		type: Boolean,
		default: false
	} 
});

chatsSchema.methods = {
	toJSON: function() {
		var obj = this.toObject();
		delete obj.creator.password;
		delete obj.creator.following;

		return obj;
	},

	calculateUnread: function() {
		var obj = this;
		obj.lastAccessed.map((access) => {
			access.unread = obj.messages.filter((msg) => {
				return msg.created > access.accessed;
			}).length;
		});
	},

	calculateUnreadFor: function (user) {
		var obj = this;
		obj.lastAccessed.map((access) => {
			if (access.user.toString() === user._id.toString()) {
				obj.unread = access.unread;
			}
		});
	},

	doAccess: function (user) {
		var chat = this;
		var lastAccessedUpdated = false;

		chat.lastAccessed.map((access) => {
			if (access.user.toString() === user._id.toString()) {
				access.accessed = Date.now();
				lastAccessedUpdated = true
			}
		});

		if (!lastAccessedUpdated) {
			chat.lastAccessed.push({
				user: user._id,
				accessed: Date.now()
			});
		}
	},

	notifyUsers: function(data) {
		var chatMessage = data.chatMessage;

		var notification = {
			chatId: data.chatId,
			chatMessage: data.chatMessage,
			actorId: data.actorId,
			notificationType: data.type
		};

		this.populate('creator participants', (err, chat) => {
			chat.participants.map((user) => {
				user.notify(notification);
			});
		});
	},

	afterSave(user) {
		var obj = this;
		obj.saved = obj.saves.indexOf(user._id) !== -1;
		obj.isDeleted = obj.deleted.indexOf(user._id) !== -1;
		return obj;
	}
};

mongoose.model('Chat', chatsSchema);