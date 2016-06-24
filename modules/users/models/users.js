import mongoose from 'mongoose';
import _ from 'lodash';
import bcrypt from 'bcrypt';

const escapeProperty = function (value) {
	return _.escape(value);
};

const validatePresenceOf = function (value) {
	return (this.provider && !this.provider !== 'local') || (value && value.length);
};

const validateUniqueEmail = function (value, callback) {
	var User = mongoose.model('User');
	User.find({
		$and: [{
			email: new RegExp('^' + value + '$', 'i')
		}, {
			_id: {
				$ne: this._id
			}
		}]
	}, function (err, user) {
		callback(err || user.length === 0);
	});
};

const emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
		match: [/^\w+$/, 'Sorry, your username can only contain alphanumeric characters']
	},

	email: {
		type: String,
		required: true,
		unique: true,
		match: [emailRE, 'Please enter a valid email'],
		validate: [validateUniqueEmail, 'Sorry, that email is already in use']
	},

	password: {
		type: String,
		required: true
	},

	roles: {
		type: Array,
		default: ['authenticated']
	},

	provider: {
		type: String,
		default: 'local'
	},

	following: [{
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'User'
	}],

	profileView: {
		type: Number,
		default: 0
	},

	socketId: {
		type: String,
		default: ''
	},

	onlineStatus: {
		type: Boolean,
		default: false
	},

	loggedIn: {
		type: Boolean,
		default: false
	},

	activationCode: {
		type: String
	},

	token: String,

	loginAttemps: {
		type: Number,
		default: 0
	},

	lockUntil: {
		type: Number
	}
});

UserSchema.pre('save', function (next) {
	var user = this;
	if (!user.isModified('password')) {
		return next;
	}

	bcrypt.genSalt(10, function (err, salt) {
		if (err) {
			return next(err);
		}

		bcrypt.hash(user.password, salt, function (err, hash) {
			if (err) {
				return next(err);
			}

			user.password = hash;
			user.activationCode = Date.now().toString().substr(4, 4) + Date.now().toString().substr(6, 4) + Date.now().toString();
			next();
		});
	});
});


UserSchema.virtual('isLocked').get(function() {
	return !!(this.lockUntil && this.lockUntil > Date.now());
});

UserSchema.methods = {
	hasRole: function (role) {
		var roles = this.roles;
		return roles.indexOf('admin') !== -1 || roles.indexOf(role) !== -1;
	},

	isAmdin: function() {
		return this.roles.indexOf('admin') !== -1;
	},

	comparePassword: function (candidatePassword, callback) {
		bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
			if (err) {
				return callback(err);
			}

			callback(null, isMatch);
		});
	},

	incorrectLoginAttempts: function (callback) {
		if (this.lockUntil && this.lockUntil < Date.now()) {
			return this.update({
				$set: { loginAttempts: 1 },
				$unset: { lockUntil: 1 }
			}, callback);
		}

		var updates = { $inc: { loginAttempts: 1 }};

		if (this.loginAttempts + 1 >= 5 && !this.isLocked) {
			updates.$set = { lockUntil: Date.now() + 2 * 60 * 60 * 1000 };
		}

		return this.update(updates, callback);
	},

	toJSON: function() {
		var obj = this.toObject();
		obj.onlineStatus = obj.socketId ? true : false;
		delete obj.password;
		delete obj.token;
		return obj;
	}
};

mongoose.model('User', UserSchema);