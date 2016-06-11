var mongoose = require('mongoose');
var Stream = mongoose.model('Stream');

module.exports = function (System) {
	var json = System.plugins.JSON;
	var obj = {};

	obj.create = function (req, res) {
		var stream = new Stream(req.body);
		stream.creator = req.user._id;
		stream.subscribers.push(req.user._id);
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

	obj.single = function (req, res) {
		Stream.findOne({_id: req.params.streamId})
		.populate('creator')
		.populate('subscribers')
		.exec(function (err, stream) {
			if (err) {
				return json.bad(err, res);
			} else if (stream) {
				stream = stream.afterSave(req.user);

				return json.good({
					record: stream
				}, res);
			} else {
				return json.bad({message: 'Sorry, that stream could not be found'}, res);
			}
		});
	};

	return obj;
};