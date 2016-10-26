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
		get: escapeProperty
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
	}
});

commentSchema.methods = {
	toJSON: function() {
		var obj = this.toObject();

		if (obj.creator) {
			delete obj.create.password;
		}

		return obj;
	}
}

mongoose.model('Comment', commentSchema);