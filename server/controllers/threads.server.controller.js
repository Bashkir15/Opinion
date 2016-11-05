import mongoose from 'mongoose';
import json from '../helpers/json';
import async from 'async';

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
				delete criteria.created;
				criteria.title = new RegExp(req.query.filter, 'i');
			}

			Thread.find(criteria)
			.skip(parseInt(req.query.page) * global.config.settings.perPage)
			.limit(global.config.settings.perPage + 1)
			.populate('creator')
			.populate('stream')
			.exec((err, threads) => {
				if (err) {
					return json.bad(err, res);
				} else {

					var morePages = global.config.settings.perPage < threads.length;

					if (morePages) {
						threads.pop();
					}

					if (req.user) {
						threads.map((e) => {
							e = e.afterSave(req.user);
						});
					}

					return json.good({
						records: threads,
						morePages: morePages
					}, res);
				}
			});
		};

		return getPosts();
	};

	obj.home = (req, res) => {
		async.waterfall([
			function(done) {
				Stream.find({subscribers: req.user._id})
				.populate('threads')
				.exec((err, streams) => {
					done(err, streams);
				});
			},
			function (streams, done) {
				var threadList = [];
				streams.forEach((single) => {
					if (single.threads) {
						Thread.find({_id: single._id})
						.populate('comment')
						.exec((err, threads) => {
							threadList.push(threads);
							done(err, threadList);
						});
					}
				});
			},

			function (threadList, done) {
				var homeItems = [];

				threadList.forEach((thread) => {
					homeItems.push(thread);
					done(homeItems);
				});
			}
		], (homeItems) => {
			json.good({
				records: homeItems
			}, res);
		});
	};

	obj.single = (req, res) => {
		Thread.findOne({_id: req.params.threadId})
		.populate('stream')
		.populate('creator')
		.exec((err, thread) => {
			if (err) {
				return json.bad(err, res);
			}
			thread.views++;
			thread.save((err) => {
				if (req.user) {
					thread = thread.afterSave(req.user);
				}

				json.good({
					record: thread
				}, res);
			});
		});
	};

	obj.like = (req, res) => {
		Thread.findOne({_id: req.params.threadId})
		.populate('creator')
		.populate('comments')
		.exec((err, thread) => {
			if (err) {
				return json.bad(err, res);
			} else {
				if (thread.likes.indexOf(req.user._id) !== -1) {
					return json.bad({message: 'Sorry, you have already liked that thread'}, res);
				} else if (thread.dislikes.indexOf(req.user._id) !== -1) {
					thread.dislikes.splice(thread.dislikes.indexOf(req.user._id), 1);
					thread.likes.push(req.user._id);
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
					thread.likes.push(req.user._id);
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

	obj.dislike = (req, res) => {
		Thread.findOne({_id: req.params.threadId})
		.populate('creator')
		.populate('comments')
		.exec((err, thread) => {
			if (err) {
				return json.bad(err, res);
			} else {
				if (thread.dislikes.indexOf(req.user._id) !== -1) {
					return json.bad({message: 'Sorry, you haven\'t liked that thread yet'}, res);
				} else if (thread.likes.indexOf(req.user._id) !== -1) {
					thread.likes.splice(thread.likes.indexOf(req.user._id), 1);
					thread.dislikes.push(req.user._id);
					thread.score += 1;
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
					thread.dislikes.push(req.user._id);
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


	obj.save = (req, res) => {
		Thread.findOne({_id: req.params.threadId})
		.populate('creator')
		.populate('comments')
		.exec((err, thread) => {
			if (err) {
				return json.bad(err, res);
			} else {
				if (thread.saves.indexOf(req.user._id) !== -1) {
					return json.bad({message: 'Sorry, you have already saved that thread'}, res);
				}

				thread.saves.push(req.user._id);
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
		});		 
	};

	obj.unsave = (req, res) => {
		Thread.findOne({_id: req.params.threadId})
		.populate('creator')
		.populate('comments')
		.exec((err, thread) => {
			if (err) {
				return json.bad(err, res);
			} else {
				if (thread.saves.indexOf(req.user._id) !== -1) {
					thread.saves.splice(thread.saves.indexOf(req.user._id), 1);
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
					return json.bad({message: 'Sorry, you have not saved that thread yet'}, res);
				}
			}
		});
	};

	return obj;
};