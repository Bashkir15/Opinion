import mongoose from 'mongoose';
import json from '../helpers/json';
var Thread = mongoose.model('Thread');
var Stream = mongoose.model('Stream');
var User = mongoose.model('User');
var config = require('../config/env/' + (process.env.NODE_ENV || 'development'));

module.exports = function() {
	var obj = {};

	obj.create = function (req, res) {
		var thread = new Thread(req.body);
		thread.stream = req.body.stream;
		thread.creator = req.user._id;
		thread.upvotes.push(req.user._id);
		thread.save(function (err) {
			thread = thread.afterSave(req.user);

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

			User.findOne({_id: req.user._id})
			.exec(function (err, user) {
				if (err) {
					return json.bad(err, res);
				} 

				user.threadScore += 1;
				user.save(function (err) {
					if (err) {
						return json.bad(err, res);
					}
				});
			});

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

					 if (req.user) {
						threads.map(function (e) {
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

	obj.home = function (req, res) {
		var criteria = {};

		if (req.query && req.query.timestamp) {
			criteria.created = {$gte: req.query.timestamp};
		}

		if (req.query && req.query.filter) {
			delete criteria.created;
			criteria.title = new RegExp(req.query.filter, 'i');
		}

		Thread.find(criteria, null)
		.populate('creator')
		.populate('stream')
		.populate('comments')
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

				if (req.user) {
					threads.map(function (e) {
						e = e.afterSave(req.user);
					});
				}

				json.good({
					records: threads,
					morePages: morePages
				}, res);
			}
		});
	};

	obj.timeline = function (req, res) {
		var userId = req.params.userId || req.user._id;

		var getThreads = function() {
			var criteria = { creator: userId};

			if (req.query && req.query.timestamp) {
				criteria.created = { $gte: req.query.timestamp};
			}

			if (req.query && req.query.filter) {
				delete criteria.created;
				criteria.title = new RegExp(req.query.filter, 'i');
			}

			Thread.find(criteria, null)
			.populate('creator')
			.populate('stream')
			.populate('comments')
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

					if (req.user) {
						threads.map(function (e) {
							e = e.afterSave(req.user);
						});
					}

					json.good({
						records: threads,
						morePages: morePages
					}, res);
				}
			});
		};

		return getThreads();
	};

	obj.savedThreads = function (req, res) {
		var userId = req.params.userId;

		var getThreads = function() {
			var criteria = {saves: userId};

			if (req.query && req.query.timestamp) {
				criteria.created = {$gte: req.query.timestamp};
			}

			if (req.query && req.query.filter) {
				delete criteria.created;
				criteria.title = new RegExp(req.query.filter);
			}

			Thread.find(criteria, null)
			.populate('creator')
			.populate('stream')
			.populate('comments')
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

					if (req.user) {
						threads.map(function (e) {
							e = e.afterSave(req.user);
						});
					}

					json.good({
						records: threads,
						morePages: morePages
					}, res);
				}
			});
		};

		return getThreads();
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
					var isMod;
					thread = thread.afterSave(req.user);

					Stream.findOne({_id: thread.stream})
					.exec(function (err, stream) {
						if (err) {
							return json.bad(err, res);
						}

						var isInArray = stream.moderators.some(function (moderator) {
							return moderator.equals(req.user._id);
						});

						if (isInArray) {
							isMod = true;
						} else {
							isMod = false;
						}
					});
				}

				if (isMod = true) {
					return json.good({
						record: thread,
						isMod: isMod
					}, res);
				} else {
					json.good({
						record: thread
					}, res);
				}
			} else {
				return json.bad({message: 'Sorry, that thread could not be found'}, res);
			}
		});
	};

	obj.upvote = function (req, res) {
		Thread.findOne({_id: req.params.threadId})
		.populate('creator')
		.populate('stream')
		.exec(function (err, thread) {
			if (err) {
				return json.bad(err, res);
			} else {
				if (thread.upvotes.indexOf(req.user._id) !== -1) {
					return json.bad({message: 'Sorry, you have already upvoted that thread'}, res);
				} else if (thread.downvotes.indexOf(req.user._id) !== -1) {
					thread.downvotes.splice(thread.downvotes.indexOf(req.user._id), 1);
					thread.upvotes.push(req.user._id);
					thread.save(function (err, item) {
						thread = thread.afterSave(req.user);

						User.findOne({_id: thread.creator._id})
						.exec(function (err, user) {
							if (err) {
								return json.bad(err, res);
							}

							user.threadScore += 1;
							user.save(function (err) {
								if (err) {
									return json.bad(err, res);
								}
							});
						});

						if (err) {
							return json.bad(err, res);
						}

						json.good({
							record: item
						}, res);
					});
				} else {
					thread.upvotes.push(req.user._id);
					thread.creator.threadScore += 1;
					thread.save(function (err, item) {
						thread = thread.afterSave(req.user);

						User.findOne({_id: thread.creator._id})
						.exec(function (err, user) {
							if (err) {
								return json.bad(err, res);
							}

							user.threadScore += 1;
							user.save(function (err) {
								if (err) {
									return json.bad(err, res);
								}
							});
						});

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

	obj.downvote = function (req, res) {
		Thread.findOne({_id: req.params.threadId})
		.populate('creator')
		.populate('stream')
		.exec(function (err, thread) {
			if (err) {
				return json.bad(err, res);
			} else {
				if (thread.downvotes.indexOf(req.user._id) !== -1) {
					return json.bad({message: 'Sorry, you have already downvoted that thread'}, res);
				} else if (thread.upvotes.indexOf(req.user._id) !== -1) {
					thread.upvotes.splice(thread.upvotes.indexOf(req.user._id), 1);
					thread.downvotes.push(req.user._id);
					thread.save(function (err, item) {
						thread = thread.afterSave(req.user);

						User.findOne({_id: thread.creator._id})
						.exec(function (err, user) {
							if (err) {
								return json.bad(err, res);
							}

							user.threadScore -= 1;
							user.save(function (err) {
								if (err) {
									return json.bad(err, res);
								}
							});
						});

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

						User.findOne({_id: thread.creator._id})
						.exec(function (err, user) {
							if (err) {
								return json.bad(err, res);
							}

							user.threadScore -= 1;
							user.save(function (err) {
								if (err) {
									return json.bad(err, res);
								}
							});
						});


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

	obj.save = function (req, res) {
		Thread.findOne({_id: req.params.threadId})
		.populate('creator')
		.populate('stream')
		.exec(function (err, thread) {
			if (err) {
				return json.bad(err, res);
			} else {
				if (thread.saves.indexOf(req.user._id) !== -1) {
					return json.bad({message: 'Sorry, you have already saved that thread'}, res);
				}

				thread.saves.push(req.user._id);
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
		});
	};

	obj.unsave = function (req, res) {
		Thread.findOne({_id: req.params.threadId})
		.populate('creator')
		.populate('stream')
		.exec(function (err, thread) {
			if (err) {
				return json.bad(err, res);
			} else {
				if (thread.saves.indexOf(req.user._id) !== -1) {
					thread.saves.splice(thread.saves.indexOf(req.user._id), 1);
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
					return json.bad({message: 'Sorry, you do not have that thread saved'}, res);
				}
			} 
		});
	};

	obj.modify = function (req, res) {
		Thread.findOne({_id: req.params.threadId})
		.exec(function (err, thread) {
			if (err) {
				return json.bad(err, res);
			} else {
				thread.title = req.body.title;
				thread.content = req.body.content;
				thread.save(function (err, item) {
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

	obj.remove = function (req, res) {
		Thread.findOne({_id: req.params.threadId})
		.exec(function (err, thread) {
			if (err) {
				return json.bad(err, res);
			} else {
				thread.remove(function (err) {
					if (err) {
						return json.bad(err, res);
					}

					json.good({}, res);
				});
			}
		});
	};

	return obj;
};