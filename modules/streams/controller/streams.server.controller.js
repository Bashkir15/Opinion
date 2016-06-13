var mongoose = require('mongoose');
var Stream = mongoose.model('Stream');

module.exports = function (System) {
	var json = System.plugins.JSON;
	var obj = {};

	obj.create = function (req, res) {
		var stream = new Stream(req.body);
		stream.creator = req.user._id;
		stream.subscribers.push(req.user._id);
		stream.moderators.push(req.user._id);
		stream.save(function (err) {
			if (err) {
				return json.bad(err, res);
			}

			json.good(stream, res);
		});
	};

	obj.list = function (req, res) {
		var criteria = {};

		if (req.query && req.query.subscribed) {
			criteria.subscribers = req.user._id;
		}

		Stream.find(criteria, null)
		.populate('creator')
		.skip(parseInt(req.query.page) * System.config.settings.perPage)
		.limit(System.config.settings.perPage + 1)
		.exec(function (err, streams) {
			if (err) {
				return json.bad(err, res);
			} else {
				var morePages = System.config.settings.perPage < streams.length;

				if (morePages) {
					streams.pop();
				}

				streams.map(function (e) {
					e = e.afterSave(req.user);
				}); 

				json.good({
					records: streams,
					morePages: morePages
				}, res);
			}
		});
	};

	obj.single = function (req, res, next) {
		var User = mongoose.model('User');
		Stream.findOne({_id: req.params.streamId})
		.populate('creator')
		.populate('subscribers')
		.populate('moderators')
		.exec(function (err, stream) {
			if (err) {
				return json.bad(err, res);
			} else if (stream) {
				stream = stream.afterSave(req.user);

				if (req.user) {
					var isInArray = stream.moderators.some(function (moderator) {
						return moderator.equals(req.user._id);
					});

					if (isInArray) {
						var isMod = true;
					} else {
						var isMod = false;
					}
				}

				return json.good({
					record: stream,
					moderators: stream.moderators,
					isMod: isMod
				}, res);
			} else {
				return json.bad({message: 'Sorry, that stream could not be found'}, res);
			}
		});
	};

	obj.subscribe = function (req, res) {
		Stream.findOne({_id: req.params.streamId})
		.populate('creator')
		.exec(function (err, stream) {
			if (err) {
				return json.bad(err, res);
			} else if (stream) {
				if (stream.subscribers.indexOf(req.user._id) !== -1) {
					return json.bad({message: 'Sorry, you are already subscribed to this stream'}, res);
				}

				stream.subscribers.push(req.user._id);
				stream.save(function (err, item) {
					stream = stream.afterSave(req.user);

					if (err) {
						return json.bad(err, res);
					}

					json.good({
						record: stream
					}, res);
				});
			} else {
				return json.bad({message: 'Sorry, that stream could not be found'}, res);
			}
		});
	};

	obj.unsubscribe = function (req, res) {
		Stream.findOne({_id: req.params.streamId})
		.populate('creator')
		.exec(function (err, stream) {
			if (err) {
				return json.bad(err, res);
			} else if (stream) {
				if (stream.subscribers.indexOf(req.user._id) !== -1) {
					stream.subscribers.splice(stream.subscribers.indexOf(req.user._id), 1);
					stream.save(function (err, item) {
						stream = stream.afterSave(req.user);

						if (err) {
							return json.bad(err, res);
						}

						json.good({
							record: stream
						}, res);
					});
				} else {
					return json.bad({message: 'You currently are not subscribed to that stream'}, res);
				}
			} else {
				return json.bad({message: 'Sorry, that stream could not be found'}, res);
			}
		});
	};

	obj.remove = function (req, res) {
		Stream.findOne({_id: req.params.streamId}, function (err, stream) {
			if (err) {
				return json.bad(err, res);
			} else if (stream) {
				var inArray = stream.moderators.some(function (moderator) {
					return moderator.equals(req.user._id);
				});

				if (req.user.roles.indexOf('admin') !== -1 || inArray) {

					stream.remove(function (err) {
						if (err) {
							return json.bad(err, res);
						}

						json.good({}, res);
					});
				}
			} else {
				return json.bad({message: 's'}, res);
			}
		});
	};

	obj.modify = function (req, res) {
		Stream.findOne({_id: req.params.streamId})
		.populate('creator')
		.exec(function (err, stream) {
			if (err) {
				return json.bad(err, res);
			} else if (stream) {

				var inArray = stream.moderators.some(function (moderator) {
					return moderator.equals(req.user._id);
				});

				if (req.user.roles.indexOf('admin') !== -1 || inArray) {
					stream.name = req.body.name;
					stream.description = req.body.description;
					stream.save(function (err, item) {
						stream = stream.afterSave(req.user);

						if (err) {
							return json.bad(err, res);
						}

						json.good({
							record: item
						}, res);
					});
				}
			} else {
				return json.bad({message: 'Sorry, that stream could not be found'}, res);
			}
		});
	};

	return obj;
};