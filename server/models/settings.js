import mongoose from 'mongoose'
import escape from 'lodash.escape'

var escapeProperty = (value) => {
	return escape(value);
};

var SettingsSchema = new mongoose.Schema({
	created: {
		type: Date,
		default: Date.now
	},

	lastUpdated: {
		type: Date,
		default: Date.now
	},

	theme: {
		type: String,
		default: 'default'
	},

	profile: [{
		hideEmail: {
			type: Boolean,
			default: false
		},

		hideGender: {
			type: Boolean,
			default: false
		},

		hidePhone: {
			type: Boolean,
			default: true
		},

		hideInterests: {
			type: Boolean,
			default: false
		},

		hideOccupation: {
			type: Boolean,
			default: false
		},

		hideBio: {
			type: Boolean,
			default: false
		},

		hideFollowing: {
			type: Boolean,
			default: false
		},

		hideSaved: {
			type: Boolean,
			default: false
		},

		hideActivity: {
			type: Boolean,
			default: false
		}
	}],

	creator: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true
	}
});

SettingsSchema.methods = {
	toJson: function() {
		var obj = this.toObject();

		if (obj.creator) {
			delete obj.creator.password;
			delete obj.creator.following;
		}
	}
}

mongoose.model('Setting', SettingsSchema);