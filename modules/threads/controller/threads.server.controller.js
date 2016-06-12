var mongoose = require('mongoose');
var Thread = mongoose.model('Thread');

module.exports = function (System) {
	var json = System.plugins.JSON;
	var Stream = mongoose.model('Stream');
	var obj = {};

	obj.create = function (req, res) {
		var thread = new Thread(req.body);
		thread.creator = req.user._id;
		thread.stream = req.body.stream;
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

			json.good(thread, res);
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
				criteria.content = new RegExp(req.query.filter, 'i');
			}

			Thread.find(criteria, null)
			.populate('creator')
			.populate('stream')
			.skip(parseInt(req.query.page) * System.config.settings.perPage)
			.limit(System.config.settings.perPage + 1)
			.exec(function (err, threads) {
				if (err) {
					return json.bad(err, res);
				} else {
					var morePages = System.config.settings.perPage < threads.length;

					if (morePages) {
						threads.pop();
					}

					threads.map(function (e) {
						e = e.afterSave(req.user);
					});

					json.good({
						records: threads,
						morePages: morePages
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
				thread = thread.afterSave(req.user);

				 json.good({
					record: thread
				}, res);
			} else {
				return json.bad({message: 'Sorry, that thread could not be found'}, res);
			}
		});
	};

	obj.upvote = function (req, res) {
		Thread.findOne({_id: req.params.threadId})
		.populate('creator')
		.exec(function (err, thread) {
			if (err) {
				return json.bad(err, res);
			} else if (thread) {
				if (thread.upvotes.indexOf(req.user._id) !== -1) {
					return json.bad({message: 'Sorry, you have already upvoted that thread'}, res);
				} else if (thread.downvotes.indexOf(req.user._id) !== -1) {
					thread.downvotes.splice(thread.downvotes.indexOf(req.user._id), 1);
					thread.upvotes.push(req.user._id);
					thread.save(function (err, item) {
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
					thread.save(function (err, item) {
						thread = thread.afterSave(req.user);

						if (err) {
							return json.bad(err, res);
						}

						json.good({
							record: item
						}, res);
					});
				}
			} else {
				return json.bad({message: 'Sorry, that thread could not be found'}, res);
			}
		});
	};

	obj.downvote = function (req, res) {
		Thread.findOne({_id: req.params.threadId})
		.populate('creator')
		.exec(function (err, thread) {
			if (err) {
				return json.bad(err, res);
			} else if (thread) {
				if (thread.downvotes.indexOf(req.user._id) !== -1) {
					return json.bad({message: 'Sorry, you have already downvoted that thread'}, res);
				} else if (thread.upvotes.indexOf(req.user._id) !== -1) {
					thread.upvotes.splice(thread.upvotes.indexOf(req.user._id), 1);
					thread.downvotes.push(req.user._id);
					thread.save(function (err, item) {
						thread = thread.afterSave(req.user);

						if (err) {
							return json.bad(err, res);
						}

						json.good({
							record: item
						}, res);
					});
				} else {
					thread.downvotes.push(req.user._id);
					thread.save(function (err, item) {
						thread = thread.afterSave(req.user);

						if (err) {
							return json.bad(err, res);
						}

						json.good({
							record: item
						}, res);
					});
				}
			} else {
				return json.bad({message: 'Sorry, that thread could not be found'}, res);
			}
		});
	};

	return obj;
};