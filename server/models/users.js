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
		unique: true,
		get: escapeProperty
	},

	password: {
		type: String,
		required: true,
		get: escapeProperty,
		validate: [validatePresenceOf, 'Your password cannot be blank']
	},

	gender: {
		type: String
	},

	phone: {
		type: String
	},

	interests: {
		type: String
	},

	occupation: {
		type: String
	},

	bio: {
		type: String
	},

	profileViews: {
		type: Number,
		default: 0
	},

	picture: {
		type: String,
		default: 'static/uploads/users/pictures/default.png'
	},

	provider: {
		type: String,
		default: 'local'
	},

	roles: {
		type: Array,
		default: ['authenticated']
	},

	following: [{
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'User'
	}],

	streams: [{
		type: mongoose.Schema.ObjectId,
		required: false,
		ref: 'Stream'
	}],

	threadScore: {
		type: Number,
		default: 0
	},

	commentScore: {
		type: Number,
		default: 0
	},

	notifications: [{
		thread: {
			type: mongoose.Schema.ObjectId,
			ref: 'Thread'
		},

		user: {
			type: mongoose.Schema.ObjectId,
			ref: 'User'
		},

		created: {
			type: Date,
			default: Date.now()
		},

		actor: {
			type: mongoose.Schema.ObjectId,
			ref: 'User'
		},

		stream: {
			type: mongoose.Schema.ObjectId,
			ref: 'Stream'
		},

		notificationType: String,

		unread: {
			type: Boolean,
			default: true
		}
	}],

	socketId: {
		type: String,
		default: false
	},

	onlineStatus: {
		type: Boolean,
		default: false
	},

	loggedIn: {
		type: Boolean,
		default: false
	},

	loginAttempts: {
		type: Number,
		default: 0,
		required: true
	}, 

	lockUntil: {
		type: Number
	},

	limitReached: {
		type: Number,
		required: true,
		default: 0
	},

	secureLock: {
		type: Boolean,
		default: false
	},

	resetPasswordToken: String,
	resetPasswordExpires: Date
});

UserSchema.set('toJSON', {
	virtuals: true,
	getters: true
});

 UserSchema.virtual('isLocked').get(() => {
	return !!(this.lockUntil && this.lockUntil > Date.now());
}); 

UserSchema.pre('remove', function (next) {
	this.model("User").find({following: this._id}, (err, docs) => {
		if (err) {
			return next(err);
		}

		for (var doc in docs) {
			docs[doc].remove();
		}
	}, next);

	this.model('Chat').find({creator: this._id}, (err, docs) => {
	 	if (err) {
	 		return next(err);
	 	}

	 	for (var doc in docs) {
	 		docs[doc].remove();
	 	}
	}, next);

	this.model('Stream').find({creator: this._id}, (err, docs) => {
		if (err) {
			return next(err);
		}

		for (var doc in docs) {
			docs[doc].remove();
		}
	}, next);

	this.model('Thread').find({creator: this._id}, (err, docs) => {
		if (err) {
			return next(err);
		}

		for (var doc in docs) {
			docs[doc].remove();
		}
	}, next);

	this.model('Comment').find({creator: this._id}, (err, docs) => {
		if (err) {
			return next(err);
		}

		for (var doc in docs) {
			docs[doc].remove();
		}
	});

	next();
});

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

	incorrectLoginAttempts: function (cb) {
		if (this.lockUntil && this.lockUntil < Date.now()) {
			return this.update({
				$set: { 
					loginAttempts: 1,
					limitReached: 0
				},
				$unset: { lockUntil: 1}
			}, cb);
		}

		var updates = {
			$inc: {
				loginAttempts: 1
			}
		};

		if (this.loginAttempts + 1 > 5 && !this.isLocked) {
			updates.$set = {
				lockUntil: Date.now() + 2 * 60 * 60 * 1000,
				limitReached: 1
			}
		}

		if (this.loginAttempts + 1 > 5 && this.limitReached == 1 && !this.isLocked) {
			updates.$set = {
				lockUntil: Date.now() + 4 * 60 * 60 * 1000,
				limitReached: 2
			}
		}

		if (this.loginAttempts + 1 > 3 && this.limitReached == 2 && !this.isLocked) {
			updates.$set = {
				lockUntil: Date.now() + 8 * 60 * 60 * 1000,
				limitReached: 3
			}
		}

		if (this.loginAttempts + 1 > 3 && this.limitReached == 3 && !this.isLocked) {
			updates.$set = {
				lockUntil: Date.now() + 10000 * 60 * 60 * 1000,
				limitReached: 4,
				secureLock: true
			}
		}

		return this.update(updates, cb);
	},

	notify: function (data) {
		data = data || {};

		var thisUser = this;

		if (!thisUser.notifications || typeof thisUser.notifications !== 'object') {
			thisUser.notifications = [];
		}

		var User = mongoose.model("User");

		var doNotify = function (fullData) {
			if (thisUser.socketId) {
				var unread = thisUser.notifications.filter((item) => {
					return item.unread;
				}).length;
				fullData.unread = unread;
				global.notifications.send(thisUser.socketId, fullData);

				console.log(thisUser.name, 'was notified');
			}
		};

		User.findOne({_id: data.actorId}).exec((err, actor) => {
			data.actor = actor;
			doNotify(data);
		});

		thisUser.notifications.push({
			thread: data.threadId,
			user: data.userId,
			actor: data.actorId,
			notificationType: data.notificationType
		});

		thisUser.notifications.sort((a, b) => {
			var dt1 = new Date(a.created);
			var dt2 = new Date(b.created);

			if (dt1 > dt2) {
				return -1;
			} else {
				return 1;
			}
		});

		return thisUser.save((err, user) => {
			return user;
		});
	},

	notifyFollowers: function (data) {
		var User = mongoose.model('User');
		User.find({following: this._id}, (err, followers) => {
			followers.map((follower) => {
				follower.notify(data);
			});
		});
	},

	toJSON: function() {
		var obj = this.toObject();
		obj.onlineStatus = obj.socketId ? true : false;
	//	delete obj.socketId;
		delete obj.password;
		delete obj.following;
		return obj;
	}
};

mongoose.model('User', UserSchema);

