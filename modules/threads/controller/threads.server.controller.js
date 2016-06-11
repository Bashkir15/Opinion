var mongoose = require('mongoose');
var Thread = mongoose.model('Thread');

module.exports = function (System) {
	var json = System.plugins.JSON;
	var Stream = mongoose.model('Stream');
	var obj = {};

	obj.create = function (req, res) {
		var post = new Post(req.body);
		post.creator = req.user._id;
		post.stream = req.body.stream;
		post.save(function (err) {
			post = post.afterSave(req.user);

			if (req.body.stream) {
				Stream.findOne({_id: req.body.stream})
				.exec(function (err, stream) {
					if (err) {
						return json.bad(err, res);
					} else if (stream) {
						stream.threads.push(post);
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

			json.good(post, res);
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
						records: posts,
						morePages: morePages
					}, res);
				}
			});
		};

		return getPosts();
	};

	return obj;
};