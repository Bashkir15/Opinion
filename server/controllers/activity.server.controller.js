import mongoose from 'mongoose'
import event from '../helpers/events'
import json from '../helpers/json'

var User = mongoose.model('User');
var Activity = mongoose.model('Activity');

module.exports = () => {
	var obj = {};

	['liked', 'disliked', 'commented', 'new thread', 'saved', 'unsaved'].map((action) => {
		event.on(action, (data) => {
			var thread = data.thread;
			var actor = data.actor;
			obj.createThread(action, actor, thread);
		});
	});

	['followed', 'unfollowed'].map((action) => {
		event.on(action, (data) => {
			var user = data.user;
			var actor = data.actor;
			obj.createUser(action, actor, user);
		});
	});

	['new stream', 'subscribed', 'unsubscribed'].map((action) => {
		event.on(action, (data) => {
			var stream = data.stream;
			var actor = data.actor;
			obj.createStream(action, actor, stream);
		});
	});

	obj.createThread = (action, actor, thread) => {
		var activity = new Activity({
			actor: actor,
			thread: thread,
			action: action
		});

		activity.save((err) => {
			if (err) {
				return err
			}

			return activity;
		});
	};

	obj.createUser = (action, actor, user) => {
		var activity = new Activity({
			actor: actor,
			user: user,
			action: action
		});

		activity.save((err) => {
			if (err) {
				return err;
			}

			return activity;
		});
	};

	obj.createStream = (action, actor, stream) => {
		var activity = new Activity({
			actor: actor,
			stream: stream,
			action: action
		});

		activity.save((err) => {
			if (err) {
				return err;
			}

			return activity;
		});
	}

	obj.feed = (req, res) => {
		User.findOne({_id: req.params.userId})
		.lean()
		.exec((err, user) => {
			if (err) {
				return json.bad(err, res);
			}

			var activityCriteria = {
				actor: user._id
			};

			Activity.find(activityCriteria, null, {sort: {created: -1}})
			.populate('actor')
			.populate('thread')
			.populate('user')
			.lean()
			.exec((err, activities) => {
				if (err) {
					return json.bad(err, res);
				}

				json.good({
					records: activities
				}, res);
			});
		});
	};

	return obj;
};