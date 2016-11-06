import mongoose from 'mongoose';
import json from '../helpers/json';

var Stream = mongoose.model('Stream');

module.exports = () => {
	var obj = {};

	obj.create = (req, res) => {
		var stream = new Stream(req.body);
		stream.creator = req.user;
		stream.subscribers.push(req.user);
		stream.moderators.push(req.user);
		stream.save((err) => {
			if (err) {
				return json.bad(err, res);
			}

			stream = stream.afterSave(req.user);

			json.good({
				record: stream
			}, res);
		});
	};

	obj.list = (req, res) => {
		
		var criteria = {};

		if (req.query.subscribed) {
			criteria.subscribers = req.user._id;
		}

		if (req.query && req.query.timestamp) {
			criteria.created = {
				$gte: req.query.timestamp
			};
		}


		if (req.query && req.query.filter) {
			delete criteria.created;
			criteria.name = new RegExp(req.query.filter, 'i');
		}

		if (req.query.unsubscribed) {
			if (req.user) {
				criteria.subscribers = {
					$ne: req.user._id
				};
				
			} else {
				criteria = {};
			}
		}

		Stream.find(criteria, null, {sort: {name: 1}})
		.skip(parseInt(req.query.page) * global.config.settings.perPage)
		.limit(global.config.settings.perPage + 1)
		.populate('creator')
		.populate('moderators')
		.populate('subscibers')
		.exec((err, streams) => {
			if (err) {
				return json.bad(err, res);
			} else {

				var morePages = global.config.settings.perPage < streams.length;

				if (morePages) {
					streams.pop();
				}

				if (req.user) {
					streams.map((e) => {
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

	obj.single = (req, res) => {
		Stream.findOne({_id: req.params.streamId})
		.populate('creator')
		.populate('subscribers')
		.populate('moderators')
		.exec((err, stream) => {
			if (err) {
				return json.bad(err, res);
			} else if (stream) {

				if (req.user) {
					stream = stream.afterSave(req.user);
				}

				return json.good({
					record: stream
				}, res);
			} else {
				return json.bad({message: 'Sorry, that stream could not be found'}, res);
			}
		});
	};

	obj.subscribe = (req, res) => {
		Stream.findOne({_id: req.params.streamId})
		.populate('creator')
		.exec((err, stream) => {
			if (err) {
				return json.bad(err, res);
			} else {
				if (stream.subscribers.indexOf(req.user._id) !== -1) {
					return json.bad({message: 'Sorry, you are already subscribed to that stream'}, res);
				}

				stream.subscribers.push(req.user._id);
				stream.save((err, item) => {
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

	obj.unsubscribe = (req, res) => {
		Stream.findOne({_id: req.params.streamId})
		.populate('creator')
		.exec((err, stream) => {
			if (err) {
				return json.bad(err, res);
			} else {
				if (stream.subscribers.indexOf(req.user._id) !== -1) {
					stream.subscribers.splice(stream.subscribers.indexOf(req.user._id), 1);
					stream.save((err, item) => {
						stream = stream.afterSave(req.user);

						if (err) {
							return json.bad(err, res);
						}

						json.good({
							record: item
						}, res);
					});
				} else {
					return json.bad({message: 'SOrry, you are not subscribed to this stream'}, res);
				}
			}
		});
	};

	return obj;
};