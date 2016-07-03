import mongoose from 'mongoose';
import _ from 'lodash';

var escapeProperty = function (value) {
	return _.escape(value);
};

var ChatsSchema = new mongoose.Schema({
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
	}]
});

ChatsSchema.methods = {
	toJSON: function() {
		var obj = this.toObject();

		if (obj.creator) {
			delete obj.creator.token;
			delete obj.creator.password;
			delete obj.creator.following;
		}

		return obj;
	},

	calculateUnread: function() {
		var obj = this;
		obj.lastAccessed.map(function (access) {
			access.unread = obj.messages.filter(function (msg) {
				return msg.created > access.accessed;
			}).length;
		});
	},

	calculateUnreadFor: function (user) {
		var obj = this;
		obj.lastAccessed.map(function (access) {
			if (access.user.toString() === user._id.toString()) {
				obj.unread = access.unread;
			}
		});
	},

	doAccess: function (user) {
		var chat = this;
		var lastAccessedUpdated = false;

		chat.lastAccessed.map(function (access) {
			if (access.user.toString() === user._id.toString()) {
				access.accessed = Date.now();
				lastAccessedUpdated = true;
			}
		});

		if (!lastAccessedUpdated) {
			chat.lastAccessed.push({
				user: user._id,
				accessed: Date.now()
			});
		}
	}
};

mongoose.model('Chat', ChatsSchema);