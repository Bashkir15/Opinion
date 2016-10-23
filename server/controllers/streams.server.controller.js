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

			json.good({
				record: stream
			}, res);
		});
	};

	obj.list = (req, res) => {
		if (req.user) {
			var user = req.user;
		}
		
		var criteria = {};

		if (req.query.subscribed) {
			criteria.subscribers = req.user._id;
		}

		if (req.query.unsubscribed) {
			criteria.subscibers = {
				$ne: req.user._id
			};
		}

		Stream.find(criteria, null, {sort: {name: 1}})
		.populate('creator')
		.populate('moderators')
		.populate('subscibers')
		.exec((err, streams) => {
			if (err) {
				return json.bad(err, res);
			} 
			
			return json.good({
				records: streams
			}, res);
		});
	};

	return obj;
};