import mongoose from 'mongoose';
import json from '../helpers/json';
var Thread = mongoose.model('Thread');
var Stream = mongoose.model('Stream');
var config = require('../config/env/' + (process.env.NODE_ENV || 'development'));

module.exports = function() {
	var obj = {};

	obj.create = function (req, res) {
		var thread = new Thread(req.body);
		thread.stream = req.body.stream;
		thread.creator = req.user._id;
		thread.save(function (err) {
			thread = thread.afterSave(req.user);

			if (req.body.stream) {
				Stream.findOne({_id: req.body.stream})
				.exec(function (err, stream) {
					if (err) {
						return json.bad(err, res);
					} else if (stream) {
						stream.threads.push(thread);
						stream.save(function (err) {
							if (err) {
								return json.bad(err, res);
							}
						});
					} else {
						return json.bad({message: 'Sorry, that stream could not be found'}, res);
					}
				});
			}

			if (err) {
				return json.bad(err, res);
			}

			json.good({
				record: thread
			}, res);
		});
	};

	obj.list = function (req, res) {
		var streamId = req.params.streamId;

		var getPosts = function() {
			var criteria = {stream: streamId};

			if (req.query && req.query.timestamp) {
				criteria.created = {$gte: req.query.timestamp};
			}

			if (req.query && req.query.filter) {
				delete criteria.created;
				criteria.title = new RegExp(req.query.filter, 'i');
			}

			Thread.find(criteria)
			.populate('creator')
			.populate('stream')
			.skip(parseInt(req.query.page) * config.settings.perPage)
			.limit(config.settings.perPage + 1)
			.exec(function (err, threads) {
				if (err) {
					return json.bad(err, res);
				} else {

					var morePages = config.settings.perPage < threads.length;

					if (morePages) {
						threads.pop();
					}

					/* if (req.user) {
						threads.map(function (e) {
							e = e.afterSave(req.user);
						});
					} */

					return json.good({
						records: threads
					}, res);
				}
			});
		};

		return getPosts();
	};

	obj.single = function (req, res) {
		Thread.findOne({_id: req.params.threadId})
		.populate('creator')
		.populate('stream')
		.exec(function (err, thread) {
			if (err) {
				return json.bad(err, res);
			} else if (thread) {
				if (req.user) {
					thread = thread.afterSave(req.user);
				}

				json.good({
					record: thread
				}, res);
			} else {
				return json.bad({message: 'Sorry, that thread could not be found'}, res);
			}
		});
	};

	return obj;
};