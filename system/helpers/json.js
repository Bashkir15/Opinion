const good = function (obj, res) {
	res.send({
		success: 1,
		res: obj
	});
};

const bad = function (err, res) {
	var obj = {
		success: 0,
		res: err
	};

	if (obj.res.errors) {
		obj.res.messages = [];

		for (var i in obj.res.errors) {
			obj.res.messages.push(obj.res.errors[i].message);
		}

		obj.res.message = obj.res.messages[0];
	}

	res.send(obj);
};

module.exports = function (System) {
	var plugin = {
		register: function() {
			return {
				good: good,
				bad: bad
			};
		}
	};


	plugin.register.attributes = {
		name: 'JSON Helper',
		key: 'JSON',
		version: '1.0.0'
	};

	return plugin;
};