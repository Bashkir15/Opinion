var mongoose = require('mongoose');
var _ = require('lodash');

var escapeProperty = function (value) {
	return _.escape(value);
};

var CommentSchema = new mongoose.Schema({
	created: {
		type: Date,
		default: Date.now
	},

	content: {
		type: String,
		required: true,
		get: escapeProperty
	},

	creator: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true
	},

	thread: {
		type: mongoose.Schema.ObjectId,
		ref: 'Thread',
		required: true
	},

	upvotes: [{
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: false
	}],

	upvoted: {
		type: Boolean,
		default: false
	},

	downvotes: [{
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: false
	}],

	downvoted: {
		type: Boolean,
		default: false
	},

	saves: [{
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: false
	}],

	saved: {
		type: Boolean,
		default: false
	}
});

CommentSchema.methods = {
	toJSON: function () {
		var obj = this.toObject();

		if (obj.creator) {
			delete obj.creator.password;
			delete obj.creator.token;
		}

		if (obj.upvotes || obj.downvotes) {
			obj.score = obj.upvotes.length - obj.downvotes.length;
		} else {
			obj.score = 0;
		}

		return obj;
	},

	afterSave: function (user) {
		var obj = this;
		obj.upvoted = obj.upvotes.indexOf(user._id) !== -1;
		obj.downvoted = obj.downvotes.indexOf(user._id) !== -1;
		obj.saved = obj.saves.indexOf(user._id) !== -1; 
		return obj;
	}
};

mongoose.model('Comment', CommentSchema);