import mongoose from 'mongoose';
import json from '../helpers/json';
import event from '../helpers/events';
import async from 'async';

var Thread = mongoose.model('Thread');
var User = mongoose.model("User");
var Stream = mongoose.model('Stream');

module.exports = () => {
	var obj = {};

	['liked', 'saved'].map((action) => {
		event.on(action, (data) => {
			var thread = data.thread;
			var actor = data.actor;
			thread.notifyUsers({
				threadId: thread._id,
				actorId: actor._id,
				type: action
			});
		});
	});

	obj.create = (req, res) => {
		var thread = new Thread(req.body);
		thread.stream = req.body.stream;
		thread.creator = req.user._id;
		thread.likes.push(req.user._id);
		thread.save((err) => {

			thread = thread.afterSave(req.user);

			thread.getMentionedUsers((err, users) => {
				users.map((user) => {
					user.notify({
						actorId: req.user._id,
						threadId: thread._id,
						notificationType: 'mention'
					});
				});
			});

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

			User.findOne({_id: req.user._id})
			.exec((err, user) => {
				if (err) {
					return json.bad(err, res);
				}

				user.threadScore += 1;
				user.save((err) => {

					if (err) {
						return json.bad(err, res);
					}
				});
			});

			event.trigger('new thread', {
				thread: thread,
				actor: req.user
			});

			req.user.notifyFollowers({
				actorId: req.user._id,
				threadId: thread._id,
				streamId: thread.stream,
				notificationType: 'feed'
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

	obj.userThreads = (req, res) => {
		var getThreads = () => {
			var criteria = {creator: req.params.userId};


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
			.populate('creator')
			.populate('stream')
			.populate('comments')
			.skip(parseInt(req.query.page) * global.config.settings.perPage)
			.limit(global.config.settings.perPage + 1)
			.exec((err, threads) => {
				if (err) {
					return json.bad(err, res);
				} else {
					console.log(threads);
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
						morePages: morePages,
						records: threads
					}, res);
				}
			});
		};

		return getThreads();
	};

	obj.userSaved = (req, res) => {
		var getThreads = () => {
			var criteria = {saves: req.params.userId};

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
			.populate('stream')
			.populate('creator')
			.populate('comments')
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
						morePages: morePages,
						records: threads
					}, res);
				}
			});
		};

		return getThreads();
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

						User.findOne({_id: thread.creator._id})
						.exec((err, user) => {
							if (err) {
								return json.bad(err, res);
							}

							user.threadScore += 1;
							user.save((err) => {
								if (err) {
									return json.bad(err, res);
								}
							});
						});

						if (err) {
							return json.bad(err, res);
						}

						event.trigger('liked', {
							thread: thread,
							actor: req.user
						});

						json.good({
							record: item
						}, res);
					});
				} else {
					thread.likes.push(req.user._id);
					thread.save((err, item) => {
						thread = thread.afterSave(req.user);

						User.findOne({_id: thread.creator._id})
						.exec((err, user) => {
							if (err) {
								return json.bad(err, res);
							}

							User.threadScore += 1;
							user.save((err) => {
								if (err) {
									return json.bad(err, res);
								}
							});
						});

						if (err) {
							return json.bad(err, res);
						}

						event.trigger('liked', {
							thread: thread,
							actor: req.user
						});

						json.good({
							record: item
						}, res);
					});
				}
			}
		});
	};

	obj.unauthHome = (req, res) => {
		var getPosts = () => {
			var criteria = {};

			if (req.query && req.query.timestamp) {
				criteria.created = {
					$gte: req.query.timestamp
				};
			}

			if (req.query && req.query.filter) {
				delete criteria.created;
				criteria.title = new RegExp(req.query.fiter, 'i');
			}

			Thread.find(criteria)
			.skip(parseInt(req.query.page) * global.config.settings.perPage)
			.limit(global.config.settings.perPage + 1)
			.populate('creator')
			.populate('stream')
			.populate('comments')
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

	obj.authedHome = (req, res) => {
		var streamsId = [];
		var homeThreadsFirst = [];
		var homeThreadsSecond = [];

		var criteria = {
			stream: {
				$in: req.user.streams
			}
		};

		Thread.find(criteria)
		.populate('creator')
		.populate('comments')
		.skip(parseInt(req.query.page) * global.config.settings.perPage)
		.limit(global.config.settings.perPage + 1)
		.exec((err, threads) => {
			if (err) {
				return json.bad(err, res);
			} else {
				var morePages = global.config.settings.perPage < threads.length;

				if (morePages) {
					threads.pop();
				}

				threads.map((e) => {
					e = e.afterSave(req.user);
				});

				json.good({
					morePages: morePages,
					records: threads
				}, res);
			}
		});
	};
		/*var streamsId = [];
		var homeThreadsFirst = [];
		var homeThreadsSecond = [];

		Stream.find({subscribers: req.user._id})
		.populate('threads')
		.exec((err, streams) => {
			
			for (var i in streams) {
				streamsId[i] = streams[i]._id;
			}

			streamsId.forEach((streamId) => {
				Thread.find({stream: streamId})
				.populate('comments')
				.exec((err, threads) => {
					for (var i = 0; i < threads.length; i++) {
						homeThreadsFirst[i] = threads[i];
					}
				});
			});
		}); */

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

						User.findOne({_id: thread.creator._id})
						.exec((err, user) => {
							if (err) {
								return json.bad(err, res);
							}

							user.threadScore -= 1;
							user.save((err) => {
								if (err) {
									return json.bad(err, res);
								}
							});
						});

						if (err) {
							return json.bad(err, res);
						}

						event.trigger('disliked', {
							thread: thread,
							actor: req.user
						});

						json.good({
							record: item
						}, res);
					});
				} else {
					thread.dislikes.push(req.user._id);
					thread.save((err, item) => {
						thread = thread.afterSave(req.user);

						User.findOne({_id: thread.creator._id})
						.exec((err, user) => {
							if (err) {
								return json.bad(err, res);
							}

							user.threadScore -= 1;
							user.save((err) => {
								if (err) {
									return json.bad(err, res);
								}
							});
						});

						if (err) {
							return json.bad(err, res);
						}

						event.trigger('disliked', {
							thread: thread,
							actor: req.user
						});

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

					event.trigger('saved', {
						thread: thread,
						actor: req.user
					});

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

						event.trigger('unsaved', {
							thread: thread,
							actor: req.user
						});

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

	obj.modify = (req, res) => {
		Thread.findOne({_id: req.params.threadId})
		.exec((err, thread) => {
			if (err) {
				return json.bad(err, res);
			} else {
				thread.title = req.body.title;
				thread.content = req.body.content;
				thread.link = req.body.link;
				thread.save((err, item) => {
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

	obj.remove = (req, res) => {
		Thread.findOne({_id: req.params.threadId})
		.exec((err, thread) => {
			if (err) {
				return json.bad(err, res);
			} else {
				thread.remove((err) => {
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