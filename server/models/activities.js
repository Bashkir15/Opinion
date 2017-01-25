import mongoose from 'mongoose'
import escape from 'lodash.escape'

var escapeProperty = (value) => {
	return escape(value);
};

var ActivitySchema = new mongoose.Schema({
	created: {
		type: Date,
		default: Date.now()
	},

	actor: {
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'User'
	},

	thread: {
		type: mongoose.Schema.ObjectId,
		required: false,
		ref: 'Thread'
	},

	stream: {
		type: mongoose.Schema.ObjectId,
		required: false,
		ref: 'Stream'
	},

	user: {
		type: mongoose.Schema.ObjectId,
		required: false,
		ref: 'User'
	},

	action: {
		type: String,
		required: true,
		get: escapeProperty
	}
});

ActivitySchema.methods = {
	toJson: function() {
		var obj = this.toObject();

		if (obj.actor) {
			delete obj.actor.password;
			delete obj.actor.following;
		}

		if (obj.user) {
			delete obj.user.password;
			delete obj.user.following;
		}

		return obj;
	}
}


mongoose.model('Activity', ActivitySchema);