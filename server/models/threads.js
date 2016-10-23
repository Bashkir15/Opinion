import mongoose from 'mongoose';
import escape from 'lodash.escape';

var escapeProperty = (value) => {
	escape(value);
};

var threadSchema = new mongoose.Schema({
	created: {
		type: Date,
		default: Date,now
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

	content: {
		type: String,
		required: false,
		ref: 'User'
	},

	stream: {
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'Stream'
	}
});

threadSchema.methods = {
	toJSON: function() {
		var obj = this.toObject();

		if (obj.creator) {
			delete obj.creator.password;
		}

		return obj;
	}
};

mongoose.model("Thread", threadSchema);