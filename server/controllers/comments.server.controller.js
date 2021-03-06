import mongoose from 'mongoose';
import json from '../helpers/json';

var Comment = mongoose.model('Comment');
var User = mongoose.model("User");
var Thread = mongoose.model('Thread');

module.exports = () => {
	var obj = {};

	obj.create = (req, res) => {
		var comment = new Comment(req.body);
		comment.creator = req.user._id;
		comment.thread = req.body.thread;
		comment.likes.push(req.user._id);
		comment.save((err) => {
			Thread.findOne({_id: req.body.thread}, (err, thread) => {
				if (err) {
					return json.bad(err, res);
				} else if (thread) {
					thread.comments.push(comment);
					thread.save((err) => {
						if (err) {
							return json.bad(err, res);
						}
					});
				} else {
					return json.bad({message: 'Sorry, that comment cannot be found'}, res);
				}
			});

			User.findOne({_id: req.user._id})
			.exec((err, user) => {
				if (err) {
					return json.bad(err, res);
				}

				user.commentScore += 1;
				user.save((err) => {
					if (err) {
						return json.bad(err, res);
					}
				});
			});

			if (err) {
				return json.bad(err, res);
			}

			json.good({
				record: comment
			}, res);
		});
	};

	obj.single = (req, res) => {
		Comment.findOne({_id: req.params.commentId})
		.exec((err, comment) => {
			if (err) {
				return json.bad(err, res);
			}

			json.good({
				record: comment
			}, res);
		});
	};

	obj.list = (req, res) => {
		var threadId = req.params.threadId

		var getComments = () => {
			var criteria = {thread: threadId};

			if (req.query && req.query.timestamp) {
				criteria.created = {
					$gte: req.query.timestamp
				};
			}

			if (req.query && req.query.filter) {
				delete criteria.created;

				criteria.content = new RegExp(req.query.filter, 'i');
			}

			Comment.find(criteria)
			.skip(parseInt(req.query.page) * global.config.settings.perPage)
			.limit(global.config.settings.perPage + 1)
			.populate('creator')
			.populate('thread')
			.exec((err, comments) => {
				if (err) {
					return json.bad(err, res);
				} else {

					var morePages = global.config.settings.perPage < comments.length;

					if (morePages) {
						comments.pop();
					}

					if (req.user) {
						comments.map((e) => {
							e = e.afterSave(req.user);
						});
					}

					return json.good({
						records: comments,
						morePages: morePages
					}, res);
				}
			});
		};

		return getComments();
	};

	obj.userComments = (req, res) => {
		var getComments = () => {
			var criteria = { creator: req.params.userId};

			if (req.query && req.query.timestamp) {
				criteria.created = {
					$gte: req.query.timestamp
				};
			}

			if (req.query && req.query.filter) {
				delete criteria.created;
				criteria.content = new RegExp(req.query.filter, 'i');
			}

			Comment.find(criteria)
			.skip(parseInt(req.query.page) * global.config.settings.perPage)
			.limit(global.config.settings.perPage + 1)
			.populate('creator')
			.populate('thread')
			.exec((err, comments) => {
				if (err) {
					return json.bad(err, res); 
				} else {
					var morePages = global.config.settings.perPage < comments.length;

					if (morePages) {
						comments.pop();
					}

					if (req.user) {
						comments.map((e) => {
							e = e.afterSave(req.user);
						});
					}

					return json.good({
						morePages: morePages,
						records: comments
					}, res);
				}
			});
		};

		return getComments();
	};

	obj.userSaved = (req, res) => {
		var getComments = () => {
			var criteria = {saves: req.params.userId};

			if (req.query && req.query.timestamp) {
				criteria.created = {
					$gte: req.query.timestamp
				};
			}

			if (req.query && req.query.filter) {
				delete criteria.created;
				criteria.content = new RegExp(req.query.filter, 'i');
			}

			Comment.find(criteria)
			.skip(parseInt(req.query.page) * global.config.settings.perPage)
			.limit(global.config.settings.perPage + 1)
			.populate('thread')
			.populate('creator')
			.exec((err, comments) => {
				if (err) {
					return json.bad(err, res);
				} else {
					var morePages = global.config.settings.perPage < comments.length;

					if (morePages) {
						comments.pop();
					}

					if (req.user) {
						comments.map((e) => {
							e = e.afterSave(req.user);
						});
					}

					return json.good({
						morePages: morePages,
						records: comments
					}, res);
				}
			});
		};

		return getComments();
	};

	obj.like = (req, res) => {
		Comment.findOne({_id: req.params.commentId})
		.populate('thread')
		.populate('creator')
		.exec((err, comment) => {
			if (err) {
				return json.bad(err, res);
			} else {
				if (comment.likes.indexOf(req.user._id) != -1) {
					return json.bad({message: 'Sorry, you have already liked that comment'}, res);
				} else if (comment.dislikes.indexOf(req.user._id) != -1) {
					comment.dislikes.splice(comment.dislikes.indexOf(req.user._id), 1);
					comment.likes.push(req.user._id);
					comment.save((err, item) => {
						comment = comment.afterSave(req.user);

						User.findOne({_id: comment.creator._id})
						.exec((err, user) => {
							if (err) {
								return json.bad(err, res);
							}

							user.commentScore += 1;
							user.save((err) => {
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
					comment.likes.push(req.user._id);
					comment.save((err, item) => {
						if (err) {
							return json.bad(err, res);
						}

						comment = comment.afterSave(req.user);


						User.findOne({_id: comment.creator._id})
						.exec((err, user) => {
							if (err) {
								return json.bad(err, res);
							}

							user.commentScore += 1;
							user.save((err) => {
								if (err) {
									return json.bad(err, res);
								}
							});
						});

						json.good({
							record: item
						}, res);
					});
				}
			} 
		});
	};

	obj.dislike = (req, res) => {
		Comment.findOne({_id: req.params.commentId})
		.populate('creator')
		.populate('thread')
		.exec((err, comment) => {
			if (err) {
				return json.bad(err, res);
			} else {
				if (comment.dislikes.indexOf(req.user._id) !== -1) {
					return json.bad({message: 'Sorry, this comment is already disliked'}, res);
				} else if (comment.likes.indexOf(req.user._id) !== -1) {
					comment.likes.splice(comment.likes.indexOf(req.user._id), 1);
					comment.dislikes.push(req.user._id);
					comment.save((err, item) => {
						comment = comment.afterSave(req.user);

						User.findOne({_id: comment.creator._id})
						.exec((err, user) => {
							if (err) {
								return json.bad(err, res);
							}

							user.commentScore -= 1;
							user.save((err) => {
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
					comment.dislikes.push(req.user._id);
					comment.save((err, item) => {
						comment = comment.afterSave(req.user);

						User.findOne({_id: comment.creator._id})
						.exec((err, user) => {
							if (err) {
								return json.bad(err, res);
							}

							user.commentScore -= 1;
							user.save((err) => {
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

	obj.save = (req, res) => {
		Comment.findOne({_id: req.params.commentId})
		.populate('thread')
		.populate('creator')
		.exec((err, comment) => {
			if (err) {
				return json.bad(err, res);
			} else {
				if (comment.saves.indexOf(req.user._id) !== -1) {
					return json.bad({message: 'Sorry, you have already saved that comment'}, res);
				} else {
					comment.saves.push(req.user._id);
					comment.save((err, item) => {
						comment = comment.afterSave(req.user);

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

	obj.unsave = (req, res) => {
		Comment.findOne({_id: req.params.commentId})
		.populate('creator')
		.exec((err, comment) => {
			if (err) {
				return json.bad(err, res);
			} else {
				if (comment.saves.indexOf(req.user._id) !== -1) {
					comment.saves.splice(comment.saves.indexOf(req.user._id), 1);
					comment.save((err, item) => {
						comment = comment.afterSave(req.user);

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


	obj.modify = (req, res) => {
		Comment.findOne({_id: req.params.commentId})
		.exec((err, comment) => {
			if (err) {
				return json.bad(err, res);
			} else {
				comment.content = req.body.content;
				comment.save((err) => {
					if (err) {
						return json.bad(err, res);
					}

					json.good({
						record: comment
					}, res);
				});
			}
		});
	};

	obj.remove = (req, res) => {
		Comment.findOne({_id: req.params.commentId})
		.exec((err, comment) => {
			if (err) {
				return json.bad(err, res);
			} else {
				comment.remove((err) => {
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