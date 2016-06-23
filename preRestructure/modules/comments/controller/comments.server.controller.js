var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');


module.exports = function (System) {
	var json = System.plugins.JSON;
	var obj = {};

	obj.create = function (req, res) {
		var Thread = mongoose.model('Thread');
		var comment = new Comment(req.body);
		comment.creator = req.user._id;
		comment.thread = req.body.thread;
		comment.save(function (err) {
			Thread.findOne({_id: req.body.thread}).exec(function (err, thread) {
				if (err) {
					return json.bad(err, res);
				} else if (thread) {
					thread.comments.push(comment);
					thread.save(function (err) {
						if (err) {
							return json.bad(err, res);
						}
					});
				} else {
					return json.bad({message: 'Sorry, that thread could not be found'}, res);
				}
			});

			json.good(comment, res);
		});
	};

	obj.list = function (req, res) {
		

		var getComments = function() {

			var criteria = {thread: req.params.threadId};
			if (req.query && req.query.timestamp) {
				criteria.created = {$gte: req.query.timestamp};
			}

			if (req.query && req.query.filter) {
				delete criteria.created;
				criteria.content = new RegExp(req.query.filter, 'i');
			}

			Comment.find(criteria, null)
			.populate('creator')
			.skip(parseInt(req.query.page) * System.config.settings.perPage)
			.limit(System.config.settings.perPage + 1)
			.exec(function (err, comments) {
				if (err) {
					return json.bad(err, res);
				} else {
					var morePages = System.config.settings.perPage < comments.length;

					if (morePages) {
						comments.pop();
					}

					if (req.user) {
						comments.map(function (e) {
							e = e.afterSave(req.user);
						});
					}

					json.good({
						records: comments,
						morePages: morePages
					}, res);
				}
			});
		};

		return getComments();
	};

	obj.timeline = function (req, res) {
		var userId = req.params.userId

		var getComments = function() {
			var criteria = {creator: userId};

			if (req.query && req.query.timestamp) {
				criteria.created = {$gte: req.query.timestamp};
			}

			if (req.query && req.query.filter) {
				delete criteria.created;
				criteria.content = new RegExp(req.query.filter, 'i');
			}

			Comment.find(criteria, null)
			.populate('thread')
			.populate('creator')
			.skip(parseInt(req.query.page) * System.config.settings.perPage)
			.limit(System.config.settings.perPage + 1)
			.exec(function (err, comments) {
				if (err) {
					return json.bad(err, res);
				} else {
					var morePages = System.config.settings.perPage < comments.length;

					if (morePages) {
						comments.pop();
					}

					if (req.user) {
						comments.map(function (e) {
							e = e.afterSave(req.user);
						});
					}

					json.good({
						records: comments,
						morePages: morePages
					}, res);
				}
			});
		};

		return getComments();
	};

	obj.savedComments = function (req, res) {
		var userId = req.params.userId || req.user._id;

		var getComments = function() {
			var criteria = {saves: userId};

			if (req.query && req.query.timestamp) {
				criteria.created = {$gte: req.query.timestamp};
			}

			if (req.query && req.query.filter) {
				delete criteria.created;
				criteria.content = new RegExp(req.query.filter, 'i');
			}

			Comment.find(criteria, null)
			.populate('thread')
			.populate('creator')
			.skip(parseInt(req.query.page) * System.config.settings.perPage)
			.limit(System.config.settings.perPage + 1)
			.exec(function (err, comments) {
				if (err) {
					return json.bad(err, res);
				} else {
					var morePages = System.config.settings.perPage < comments.length;

					if (morePages) {
						comments.pop();
					}

					if (req.user) {
						comments.map(function (e) {
							e = e.afterSave(req.user);
						});
					}

					json.good({
						records: comments,
						morePages: morePages
					}, res);
				}
			});
		};

		return getComments();
	};

	obj.single = function (req, res) {
		Comment.findOne({_id: req.params.commentId})
		.populate('creator')
		.populate('thread')
		.exec(function (err, comment) {
			if (err) {
				return json.bad(err, res);
			} else if (comment) {
				if (req.user) {
					comment = comment.afterSave;
				}

				return json.good({
					record: comment
				}, res);
			} else {
				return json.bad({message: 'Sorry, that comment could not be found'}, res);
			}
		});
	};

	obj.upvote = function (req, res, cb) {
		Comment.findOne({_id: req.params.commentId})
		.populate('creator')
		.exec(function (err, comment) {
			if (err) {
				return json.bad(err, res);
			} else if (comment) {
				if (comment.upvotes.indexOf(req.user._id) !== -1) {
					return json.bad({message: 'Sorry, you have already upvoted that comment'}, res);
				} else if (comment.downvotes.indexOf(req.user._id) !== -1) {
					comment.downvotes.splice(comment.downvotes.indexOf(req.user._id), 1);
					comment.upvotes.push(req.user._id);
					comment.creator.addCommentScore(cb);
					comment.save(function (err, item) {
						comment = comment.afterSave(req.user);

						if (err) {
							return json.bad(err, res);
						}

						json.good({
							record: item
						}, res);
					});
				} else {
					comment.upvotes.push(req.user._id);
					comment.creator.addCommentScore(cb);
					comment.save(function (err, item) {
						comment = comment.afterSave(req.user);

						if (err) {
							return json.bad(err, res);
						}

						json.good({
							record: item
						}, res);
					});
				}
			} else {
				return json.bad({message: 'Sorry, that comment could not be found'}, res);
			}
 		});
	};

	obj.downvote = function (req, res) {
		Comment.findOne({_id: req.params.commentId})
		.populate('creator')
		.exec(function (err, comment) {
			if (err) {
				return json.bad(err, res);
			} else if (comment) {
				if (comment.downvotes.indexOf(req.user._id) !== -1) {
					return json.bad({message: 'Sorry, you have already downvoted that comment'}, res);
				} else if (comment.upvotes.indexOf(req.user._id) !== -1) {
					comment.upvotes.splice(comment.upvotes.indexOf(req.user._id), 1);
					comment.downvotes.push(req.user._id);
					comment.save(function (err, item) {
						comment = comment.afterSave(req.user);
						if (err) {
							return json.bad(err, res);
						}

						json.good({
							record: item
						}, res);
					});
				} else {
					comment.downvotes.push(req.user._id);
					comment.save(function (err, item) {
						comment = comment.afterSave(req.user);

						if (err) {
							return json.bad(err, res);
						}

						json.good({
							record: item
						}, res);
					});
				}
			} else {
				return json.bad({message: 'Sorry, that comment could not be found'}, res);
			}
		});
	};


	obj.save = function (req, res) {
		Comment.findOne({_id: req.params.commentId})
		.populate('creator')
		.exec(function (err, comment) {
			if (err) {
				return json.bad(err, res);
			} else if (comment) {
				if (comment.saves.indexOf(req.user._id) !== -1) {
					return json.bad({message: 'Sorry, you have already saved that comment'}, res);
				}

				comment.saves.push(req.user._id);
				comment.save(function (err, item) {
					comment = comment.afterSave(req.user);

					if (err) {
						return json.bad(err, res);
					}

					json.good({
						record: item
					}, res);
				});
			} else {
				return json.bad({message: 'Sorry, that comment could not be found'}, res);
			}
		});
	};

	obj.unsave = function (req, res) {
		Comment.findOne({_id: req.params.commentId})
		.populate('creator')
		.exec(function (err, comment) {
			if (err) {
				return json.bad(err, res);
			} else if (comment) {
				if (comment.saves.indexOf(req.user._id) !== -1) {
					comment.saves.splice(comment.saves.indexOf(req.user._id), 1);
					comment.save(function (err, item) {
						comment = comment.afterSave(req.user);

						if (err) {
							return json.bad(err, res);
						}

						json.good({
							record: item
						}, res);
					});
				} else {
					return json.bad({message: 'Sorry, you do not have that comment saved'}, res);
				}
			} else {
				return json.bad({message: 'Sorry, that comment could not be found'}, res);
			}
		});
	};

	return obj;
};