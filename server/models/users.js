var mongoose = require('mongoose');
var _ = require('lodash');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
	created: {
		type: Date,
		default: Date.now
	},

	name: {
		type: String,
		required: true
	},

	username: {
		type: String,
		unique: true,
		required: true
	},

	email: {
		type: String,
		required: true
	},

	password: {
		type: String,
		required: true
	},

	token: {
		type: String
	},

	following: [{
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'User'
	}],

	profileViews: {
		type: Number,
		default: 0
	},

	threadScore: {
		type: Number,
		default: 0
	},

	commentScore: {
		type: Number,
		default: 0
	},

	picture: {
		type: String
	}
});

UserSchema.pre('save', function (next) {
	var user = this;

	if (!user.isModified('password')) {
		return next();
	}

	bcrypt.genSalt(10, function (err, salt) {
		if (err) {
			return next(err);
		}

		bcrypt.hash(user.password, salt, function (err, hash) {
			if (err) {
				return json.bad(err, res);
			}

			user.password = hash;
			next();
		});
	});
});


UserSchema.methods = {

	comparePassword: function (candidatePassword, callback) {
		bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
			if (err) {
				return callback(err);
			}

			callback(null, isMatch);
		});
	},
	
	toJSON: function() {
		var obj = this.toObject();
		delete obj.password;
		delete obj.token;
		return obj;
	}
};

mongoose.model('User', UserSchema);