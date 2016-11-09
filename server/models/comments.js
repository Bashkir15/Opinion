import mongoose from 'mongoose';
import escape from 'lodash.escape';

var escapeProperty = (value) => {
	escape(value);
};

var commentSchema = new mongoose.Schema({
	created: {
		type: Date,
		default: Date.now
	},

	content: {
		type: String,
		required: true,
	},

	creator: {
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'User'
	},

	thread: {
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'Thread'
	},

	likes: [{
		type: mongoose.Schema.ObjectId,
		required: false,
		ref: 'User'
	}],

	liked: {
		type: Boolean,
		default: false
	},

	dislikes: [{
		type: mongoose.Schema.ObjectId,
		required: false,
		ref: 'User'
	}],

	disliked: {
		type: Boolean,
		default: false
	},

	saves: [{
		type: mongoose.Schema.ObjectId,
		required: false,
		ref: 'User'
	}],

	saved: {
		type: Boolean,
		default: false
	}
});

commentSchema.pre('remove', function (next) {
	this.model('Thread').update({comments: this._id}, {$pull: {comments: {$in: [this._id]}}}, next);
});

commentSchema.methods = {
	toJSON: function() {
		var obj = this.toObject();

		if (obj.creator) {
			delete obj.creator.password;
		}

		if (obj.likes || obj.dislikes) {
			obj.score = obj.likes.length - obj.dislikes.length;
		}

		return obj;
	},

	afterSave: function (user) {
		var obj = this;
		obj.liked = obj.likes.indexOf(user._id) != -1;
		obj.disliked = obj.dislikes.indexOf(user._id) != -1;
		obj.saved = obj.saves.indexOf(user._id) != -1;

		return obj;
	}
}

mongoose.model('Comment', commentSchema);