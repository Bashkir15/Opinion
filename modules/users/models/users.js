var mongoose = require('mongoose');
var _ = require('lodash');
var bcrypt = require('bcrypt');

var escapeProperty = function (value) {
	return _.escape(value);
};

var validatePresenceOf = function (value) {
	return (this.provider && this.provider == '!local') || (value && value.length);
}

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
		get: escapeProperty
	},

	email: {
		type: String,
		required: true,
		unique: true,
		get: escapeProperty
	},

	password: {
		type: String,
		required: true,
		validate: [validatePresenceOf, 'Sorry, you need a password']
	},

	bio: {
		type: String,
		get: escapeProperty
	},

	occupation: {
		type: String,
		get: escapeProperty
	},

	phone: {
		type: String,
		required: false,
		get: escapeProperty
	},

	birthday: {
		type: String,
		required: false,
		get: escapeProperty
	},

	gender: {
		type: String,
		required: false,
		get: escapeProperty
	},

	interests: {
		type: String,
		required: false,
		get: escapeProperty
	},

	pictures: {
		type: Array,
		required: false
	},

	banner: {
		type: String,
		required: false
	},

	image: {
		type: String,
		required: false
	},

	threadScore: {
		type: Number
	},

	commentScore: {
		type: Number,
		default: 0
	},

	roles: {
		type: Array,
		default: ['authenticated']
	},

	provider: {
		type: String,
		default: 'local'
	},

	loggedIn: {
		type: Boolean,
		default: false
	},

	active: {
		type: Boolean,
		default: false
	},

	following: [{
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true
	}],

	token: String,

	loginAttempts: {
		type: Number,
		default: 0,
		required: true
	},

	lockUntil: {
		type: Number
	}
});

UserSchema.set('toJSON', {
	virtuals: true
});

UserSchema.virtual('isLocked').get(function() {
	return !!(this.lockUntil && this.lockUntil > Date.now());
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
			next();
		});
	});
});

UserSchema.methods = {
	hasRole: function (role) {
		var roles = this.roles;
		return roles.indexOf('admin') !== -1 || roles.indexOf(role) !== -1;
	},

	isAdmin: function() {
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

 	addThreadScore: function (cb) {
 		this.threadScore += 1;
 		this.save(cb);
 	},

 	removeThreadScore: function (cb) {
 		this.threadScore -= 1;
 		this.save(cb);
 	},

 	addCommentScore: function (callback) {
 		this.commentScore += 1;
 		this.save(callback);
 	},

 	removeCommentScore: function (callback) {
 		this.commentScore -= 1;
 		this.save(callback);
 	},

 	toJSON: function() {
 		var obj = this.toObject();
 		delete obj.password;
 		delete obj.token;
 		return obj;
 	}
};

mongoose.model('User', UserSchema);