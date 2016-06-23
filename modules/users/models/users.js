import mongoose from 'mongoose';
import _ from 'lodash';
import bcrypt from 'bcrypt';

var UserSchema = new mongoose.Schema({
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('User', UserSchema);