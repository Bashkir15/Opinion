import mongoose from 'mongoose';
import json from '../helpers/json';
import path from 'path';
import fs from 'fs';
var Stream = mongoose.model('Stream');
var config = require('../config/env/' + (process.env.NODE_ENV || 'development'));

module.exports = function() {
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

			json.good({
				record: stream
			}, res);
		});
	};

	obj.list = function (req, res) {
		var criteria = {};

		if (req.query && req.query.subscribed) {
			criteria.subscribers = req.user._id;
		}

		if (req.query && req.query.timestamp) {
			criteria.created = {$gte: req.query.timestamp};
		}

		if (req.query && req.query.filter) {
			delete criteria.created;
			criteria.name = new RegExp(req.query.filter, 'i');
		}

		Stream.find(criteria, null)
		.populate('creator')
		.populate('subscribers')
		.skip(parseInt(req.query.page) * config.settings.perPage)
		.limit(config.settings.perPage + 1)
		.exec(function (err, streams) {
			if (err) {
				return json.bad(err, res);
			} else {
				var morePages = config.settings.perPage < streams.length;

				if (morePages) {
					streams.pop();
				}

				if (req.user) {
					streams.map(function (e) {
						e = e.afterSave(req.user);
					});
				}

				json.good({
					records: streams,
					morePages: morePages
				}, res);
			}
		});
	};

	obj.single = function (req, res) {
		Stream.findOne({_id: req.params.streamId})
		.populate('creator')
		.populate('subscribers')
		.populate('moderators')
		.exec(function (err, stream) {
			if (err) {
				return json.bad(err, res);
			} else if (stream) {
				if (req.user) {
					stream = stream.afterSave(req.user);

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
			} else {
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
						record: item
					}, res);
				});
			}
		});
	};

	obj.unsubscribe = function (req, res) {
		Stream.findOne({_id: req.params.streamId})
		.populate('creator')
		.exec(function (err, stream) {
			if (err) {
				return json.bad(err, res);
			} else {
				if (stream.subscribers.indexOf(req.user._id) !== -1) {
					stream.subscribers.splice(stream.subscribers.indexOf(req.user._id), 1);
					stream.save(function (err, item) {
						stream = stream.afterSave(req.user);

						if (err) {
							return json.bad(err, res);
						}

						json.good({
							record: item
						}, res);
					});
				} else {
					return json.bad({message: 'Sorry, you are not subscribed to that stream'}, res);
				}
			}
		});
	};

	obj.image = function (req, res) {
		var streamId = req.params.streamId;
		var file = req.files.file;
		var uploadDate = Date.now();
		var tempPath = file.path;
		var targetPath = path.join(__dirname, "../../public/static/uploads/streams/images/" + streamId + uploadDate + file.name)
		var savePath = '../static/uploads/streams/images/' + streamId + uploadDate + file.name;

		Stream.findOne({_id: req.params.streamId})
		.populate('creator')
		.exec(function (err, stream) {
			if (err) {
				return json.bad(err, res);
			} else if (stream) {
				fs.rename(tempPath, targetPath, function (err) {
					if (err) {
						return json.bad(err, res);
					}

					stream.image = savePath;
					stream.save(function (err, u) {
						if (err) {
							return json.bad(err, res);
						}

						json.good({
							image: u.image
						}, res);
					});
				});
			} else {
				return json.bad({message: 'Sorry, that stream could not be found'}, res);
			}
		});
	};

	obj.remove = function (req, res) {
		Stream.findOne({_id: req.params.streamId}, function (err, stream) {
			if (err) {
				return json.bad(err, res);
			} else {
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