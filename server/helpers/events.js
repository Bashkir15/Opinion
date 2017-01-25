var registeredEvents = {};

var registerType = (e) => {
	if (typeof registeredEvents[e] !== 'object' || registeredEvents[e].constructor.name !== 'Array') {
		registeredEvents[e] = [];
	}
};

var isRegisteredEvent = (e) => {
	return (typeof registeredEvents[e] === 'object' && registeredEvents[e].constructor.name === 'Array');
};

var registerEvent = (e, cb) => {
	registeredEvents[e].push(cb);
};

var triggerEvent = (e, args) => {
	registeredEvents[e].map((cb) => {
		cb(args);
	});
};

function on(e, cb, args) {
	registerType(e);
	registerEvent(e, cb, args);
}

function trigger (e, args) {
	if (isRegisteredEvent(e)) {
		triggerEvent(e, args);
	}
}

module.exports = {
	on: on,
	trigger: trigger
};
