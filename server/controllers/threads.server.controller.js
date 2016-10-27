import mongoose from 'mongoose';
import json from '../helpers/json';

var Thread = mongoose.model('Thread');
var Stream = mongoose.model('Stream');

module.exports = () => {
	var obj = {};

	obj.create = (req, res) => {
		var thread = new Thread(req.body);
		thread.stream = req.body.stream;
		thread.creator = req.user._id;
		thread.save((err) => {

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

			Thread.find(criteria)
			.populate('creator')
			.populate('stream')
			.exec((err, threads) => {
				if (err) {
					return json.bad(err, res);
				}

				return json.good({
					records: threads
				}, res);
			});
		};

		return getPosts();
	};


	obj.single = (req, res) => {
		Thread.findOne({_id: req.params.threadId})
		.populate('stream')
		.populate('creator')
		.exec((err, thread) => {
			if (err) {
				return json.bad(err, res);
			}

			json.good({
				record: thread
			}, res);
		});
	};

	return obj;
};