import mongoose from 'mongoose';
import _ from 'lodash';


var escapeProperty = function (value) {
	return _.escape(value);
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
		required: false,
		ref: 'User'
	}],

	subscribed: {
		type: Boolean,
		default: false
	},

	threads: [{
		type: mongoose.Schema.ObjectId,
		required: false,
		ref: 'Thread'
	}],

	moderators: [{
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'User'
	}],

	image: {
		type: String
	}
});

StreamSchema.methods = {
	toJSON: function() {
		var obj = this.toObject();
		if (obj.creator) {
			delete obj.creator.password;
			delete obj.creator.token;
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