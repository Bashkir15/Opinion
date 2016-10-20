import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import escape from 'lodash.escape';

var validatePresenceOf = function (value) {
	return (this.provider && this.provider !== 'local') || (value && value.length);
};

var escapeProperty = function (value) {
	return escape(value);
};

var UserSchema = new mongoose.Schema({
	created: {
		type: Date,
		default: Date.now
	},

	name: {
		type: String,
		required: true,
		get: escapeProperty
	},

	username: {
		type: String,
		required: true,
		unique: true,
		get: escapeProperty,
		match: [/^\w+$/, 'Please enter only alphanumerica values for your username']
	},

	email: {
		type: String,
		required: true,
		unique: true
	},

	password: {
		type: String,
		validate: [validatePresenceOf, 'Your password cannot be blank']
	},

	provider: {
		type: String,
		default: 'local'
	},

/*	loginAttempts: {
		type: Number,
		default: 0,
		required: true
	}, */

	lockUntil: {
		type: Number
	}
});

UserSchema.set('toJSON', {
	virtuals: true,
	getters: true
});

/* UserSchema.virtual('isLocked').get(() => {
	return !!(this.lockUntil && this.lockUntil > Date.now());
}); */

UserSchema.pre('save', function (next) {
	var user = this;

	if (!user.isModified('password')) {
		return next();
	}

	bcrypt.genSalt(10, (err, salt) => {
		if (err) {
			return json.bad(err);
		}

		bcrypt.hash(user.password, salt, (err, hash) => {
			if (err) {
				return next(err);
			}

			user.password = hash;
			next();
		});
	});
});

UserSchema.methods = {

	hasRole: function (role) {
		let roles = this.roles;
		roles.indexOf('admin') !== -1 || roles.indexOf(role) !== -1;
	},

	isAdmin: function() {
		return this.roles.indexOf('admin') !== -1;
	},

	comparePassword: function (candidatePassword, cb) {
		var user = this;

		bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
			if (err) {
				return cb(err);
			}

			cb(null, isMatch);
		});
	},

	toJSON: function() {
		var obj = this.toObject();
		delete obj.password;

		return obj;
	}
};

mongoose.model('User', UserSchema);

