import mongoose from 'mongoose';
import json from '../helpers/json';

var Comment = mongoose.model('Comment');
var Thread = mongoose.model('Thread');

module.exports = () => {
	var obj = {};

	obj.create = (req, res) => {
		var comment = new Comment(req.body);
		comment.creator = req.user._id;
		comment.thread = req.body.thread;
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
					$gte: req.user.timestamp
				};
			}

			if (req.query && req.query.filter) {
				delete criteria.created;

				criteria.content = new RegExp(req.query.filter, 'i');
			}

			Comment.find(criteria)
			.populate('creator')
			.populate('thread')
			.exec((err, comments) => {
				if (err) {
					return json.bad(err, res);
				} else {
					if (req.user) {
						comments.map((e) => {
							e = e.afterSave(req.user);
						});
					}

					return json.good({
						records: comments
					}, res);
				}
			});
		};

		return getComments();
	};

	return obj;
};