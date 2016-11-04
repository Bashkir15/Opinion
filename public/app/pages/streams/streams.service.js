class StreamService {
	constructor ($http) {
		'ngInject';

		this._$http = $http;
	}

	create(credentials) {
		return this._$http({
			url: '/streams',
			method: 'POST',
			data: credentials
		});
	}

	get(options) {
		return this._$http({
			url: '/streams',
			method: 'GET',
			params: {
				subscribed: options.subscribed,
				timestamp: options.timestamp,
				filter: options.filter
			}
		});
	}

	single(name) {
		return this._$http({
			url: '/streams/' + name,
			method: 'GET'
		});
	}

	subscribe(id) {
		return this._$http({
			url: '/streams/' + id + '/subscribe',
			method: 'POST'
		});
	}

	unsubscribe(id) {
		return this._$http({
			url: '/streams/' + id + '/unsubscribe',
			method: 'POST'
		});
	}
}

export default StreamService