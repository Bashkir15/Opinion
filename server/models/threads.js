import mongoose from 'mongoose';
import escape from 'lodash.escape';

var escapeProperty = (value) => {
	escape(value);
};

var threadSchema = new mongoose.Schema({
	created: {
		type: Date,
		default: Date.now
	},

	title: {
		type: String,
		required: true,
		get: escapeProperty
	},

	link: {
		type: String,
		required: false,
		get: escapeProperty
	},

	hasLink: {
		type: Boolean,
		default: false
	},

	content: {
		type: String,
		required: false,
		ref: 'User'
	},

	creator: {
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'User'
	},


	stream: {
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'Stream'
	},

	views: {
		type: Number,
		default: 0
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
	},

	score: {
		type: Number,
		default: 0
	},

	comments: [{
		type: mongoose.Schema.ObjectId,
		required: false,
		ref: 'Comment'
	}]
});

threadSchema.pre('remove', function (next) {
	this.model('Stream').update({threads: this._id}, {$pull: {threads: {$in: [this._id]}}}, next);

	this.model('Comment').find({thread: this._id}, (err, docs) => {
		if (err) {
			return next(err);
		}

		for (var doc in docs) {
			docs[doc].remove();
		}
 	});

 	next();
});

threadSchema.methods = {
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
};

mongoose.model("Thread", threadSchema);