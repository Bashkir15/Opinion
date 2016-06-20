var mongoose = require('mongoose');
var Thread = mongoose.model('Thread');
var async = require('async');

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
				criteria.title = new RegExp(req.query.filter, 'i');
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

	obj.subscribedHome = function (req, res) {
		Stream.find({subscribers: req.user._id})
		.exec(function (err, streams) {
			if (err) {
				return json.bad(err, res);
			} else {
				var streamArray = [];
				streams.forEach(function (stream) {
					streamArray.push(stream);
				});
				var threadArray = [];
				streamArray.forEach(function (stream) {
					Thread.find({stream: stream._id})
					.populate('creator')
					.populate('stream')
					.exec(function (err, threads) {
						if (err) {
							return json.bad(err, res);
						}

						threads.forEach(function (thread) {
							threadArray.push(thread);
						});
					}).then(function() {
						console.log(threadArray);
						return json.good({
							records: threadArray
						}, res);
					});									
				});
			}
		});
		/*Stream.find({subscribers: req.user._id})
		.populate('creator')
		.exec(function (err, streams) {
			if (err) {
				return json.bad(err, res);
			} else {
				return streams.forEach(function (stream) {
					Thread.find({stream: stream._id})
					.populate('creator')
					.populate('comments')
					.exec(function (err, threads) {
						if (err) {
							return json.bad(err, res);
						} else {
							threads.map(function (e) {
								e = e.afterSave(req.user);
							});

							return json.good({
								records: threads
							}, res);
						}
					});
				});
			}
		}); */
	};

	obj.savedThreads = function (req, res) {
		var userId = req.params.userId || req.user._id;

		var getThreads = function() {
			var criteria = {saves: userId};

			if (req.query && req.query.timestamp) {
				criteria.created = {$gte: req.query.timestamp};
			}

			if (req.query && req.query.filter) {
				delete criteria.created;
				criteria.title = new RegExp(req.query.filter, 'i');
			}

			Thread.find(criteria, null)
			.populate('creator')
			.populate('comments')
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

	obj.upvote = function (req, res) {
		var User = mongoose.model('User');
		Thread.findOne({_id: req.params.threadId})
		.populate('creator')
		.populate('stream')
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

						User.findOne({_id: thread.creator._id}, function (err, user, cb) {
							if (err) {
								return json.bad(err, res);
							} else {
								user.threadScore += 1;
								user.save(function (err) {
									if (err) {
										console.log(err);
										return json.bad(err, res);
									}
								});
							}
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
					thread.creator.addThreadScore(thread);
					thread.save(function (err, item) {
						thread = thread.afterSave(req.user);

						User.findOne({_id: thread.creator}, function (err, user, cb) {
							if (err) {
								console.log(err);
								return json.bad(err, res);
							} else {
								console.log(user);
								user.threadScore += 1;
								user.save(function (err) {
									if (err) {
										console.log(err);
										return json.bad(err, res);
									}
								});
							}
						});


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
		var User = mongoose.model('User');
		Thread.findOne({_id: req.params.threadId})
		.populate('creator')
		.populate('stream')
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

						User.findOne({_id: thread.creator})
						.exec(function (err, user) {
							if (err) {
								return json.bad(err, res);
							} else {
								user.removeThreadScore();
								user.save(function (err) {
									if (err) {
										return json.bad(err, res);
									}
								});
							}
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

						User.findOne({_id: thread.creator})
						.exec(function (err, user) {
							if (err) {
								return json.bad(err, res);
							} else {
								user.removeThreadScore();
								user.save(function (err) {
									if (err) {
										return json.bad(err, res);
									}
								});
							}
						});

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

	obj.save = function (req, res) {
		Thread.findOne({_id: req.params.threadId})
		.populate('creator')
		.populate('stream')
		.exec(function (err, thread) {
			if (err) {
				return json.bad(err, res);
			} else if (thread) {
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
			} else {
				return json.bad({message: 'Sorry, that thread could not be found'}, res);
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
			} else if (thread) {
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
			} else {
				return json.bad({message: 'Sorry, that thread could not be found'}, res);
			}
		});
	};

	return obj;
};