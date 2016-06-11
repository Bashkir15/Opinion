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

	return obj;
};