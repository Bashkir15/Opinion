import mongoose from 'mongoose';
import json from '../helpers/json';

var Thread = mongoose.model('Thread');
var Stream = mongoose.model('Stream');

module.exports = () => {
	var obj = {};

	obj.create = (req, res) => {
		var thread = new Thread(req.body);
		thread.stream = req.body.stream;
		thread.creator = req.user._id;
		thread.likes.push(req.user._id);
		thread.save((err) => {

			Stream.findOne({_id: req.body.stream}, (err, stream) => {
				if (err) {
					return json.bad(err, res);
				} else if (stream) {
					stream.threads.push(thread);
					stream.save((err) => {
						if (err) {
							return json.bad(err, res);
						}
					});
				} else {
					return json.bad({message: 'Sorry, that stream could not be found'}, res);
				}
			});

			if (err) {
				return json.bad(err, res);
			}

			json.good({
				record: thread
			}, res);
		});
	};

	obj.list = (req, res) => {
		var streamId = req.params.streamId;

		var getPosts = () => {
			var criteria = {stream: streamId};

			if (req.query && req.query.timestamp) {
				criteria.created = {
					$gte: req.query.timestamp
				};
			}

			if (req.query && req.query.filter) {
				delete critera.created;
				criteria.title = new RegExp(req.query.filter, 'i');
			}

			Thread.find(criteria)
			.populate('creator')
			.populate('stream')
			.exec((err, threads) => {
				if (err) {
					return json.bad(err, res);
				} else {
					if (req.user) {
						threads.map((e) => {
							e = e.afterSave(req.user);
						});
					}

					return json.good({
						records: threads
					}, res);
				}
			});
		};

		return getPosts();
	};


	obj.single = (req, res) => {
		Thread.findOne({_id: req.params.threadId})
		.populate('stream')
		.populate('creator')
		.exec((err, thread) => {
			if (err) {
				return json.bad(err, res);
			}

			if (req.user) {
				thread = thread.afterSave(req.user);
			}

			json.good({
				record: thread
			}, res);
		});
	};

	obj.like = (req, res) => {
		Thread.findOne({_id: req.params.threadId}, (err, thread) => {
			if (err) {
				return json.bad(err, res);
			} else {
				if (thread.likes.indexOf(req.user._id) !== -1) {
					return json.bad({message: 'Sorry, you have already liked that thread'}, res);
				} else if (thread.dislikes.indexOf(req.user._id) !== -1) {
					thread.dislikes.splice(thread.dislikes.indexOf(req.user._id), 1);
					thread.upvotes.push(req.user._id);
					thread.score -= 1;
					thread.save((err, item) => {
						thread = thread.afterSave(req.user);

						if (err) {
							return json.bad(err, res);
						}

						json.good({
							record: item
						}, res);
					});
				} else {
					thread.upvotes.push(req.user._id);
					thread.save((err, item) => {
						thread = thread.afterSave(req.user);

						if (err) {
							return json.bad(err, res);
						}

						json.good({
							record: item
						}, res);
					});
				}
			}
		});
	};

	return obj;
};