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

/*	creator: {
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'User'
	}, */

	subscribers: [{
		type: mongoose.Schema.ObjectId,
		requried: false,
		ref: 'User'
	}],

	subscribed: {
		type: Boolean,
		default: false
	},

	moderators: [{
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'User'
	}]
});

StreamSchema.methods = {
	toJson: function() {
		var obj = this.toObject();

		if (obj.creator) {
			delete obj.creator.password;
		}

		return obj;
	}
};

mongoose.model('Stream', StreamSchema);