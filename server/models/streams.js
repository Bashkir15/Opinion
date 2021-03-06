import mongoose from 'mongoose';
import escape from 'lodash.escape';

var escapeProperty = (value) => {
	return escape(value);
};

var StreamSchema = new mongoose.Schema({
	created: {
		type: Date,
		default: Date.now
	},

	name: {
		type: String,
		unique: true,
		required: true,
		get: escapeProperty
	},

	description: {
		type: String,
		required: true,
		get: escapeProperty
	},

	creator: {
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'User'
	}, 

	subscribers: [{
		type: mongoose.Schema.ObjectId,
		requried: false,
		ref: 'User'
	}],

	subscribed: {
		type: Boolean,
		default: false
	},

	picture: {
		type: String,
		default: 'static/uploads/streams/pictures/default.png'
	},

	moderators: [{
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'User'
	}],

	threads: [{
		type: mongoose.Schema.ObjectId,
		requried: false,
		ref: 'Thread'
	}]
});

StreamSchema.methods = {
	toJson: function() {
		var obj = this.toObject();

		if (obj.creator) {
			delete obj.creator.password;
		}

		return obj;
	},

	afterSave: function (user) {
		var obj = this;
		obj.subscribed = obj.subscribers.indexOf(user._id) != -1;
		return obj;
	}
};

mongoose.model('Stream', StreamSchema);