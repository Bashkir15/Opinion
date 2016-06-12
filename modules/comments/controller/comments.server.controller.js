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
		var criteria = {thread: req.params.threadId};

		if (req.query && req.query.timestamp) {
			criteria.created = {$gte: req.query.timestamp};
		}

		if (req.query && req.query.filter) {
			delete criteria.created;
			criteria.content = new RegExp(req.query.fiter, 'i');
		}

		Comment.find(criteria, null)
		.populate('creator')
		.populate('thread')
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

				comments.map(function (e) {
					e = e.afterSave(req.user);
				});

				json.good({
					records: comments,
					morePages: morePages
				}, res);
			}
		});
	};

	return obj;
};