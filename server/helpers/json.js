function good(obj, res) {
	res.send({
		success: 1,
		res: obj
	});
}

function bad(err, res) {
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
}

module.exports = {
	good: good,
	bad: bad
};