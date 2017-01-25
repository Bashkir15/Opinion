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
				unsubscribed: options.unsubscribed,
				timestamp: options.timestamp,
				filter: options.filter
			}
		});
	}

	count() {
		return this._$http({
			url: '/streams/count',
			method: 'GET'
		});
	}

	search(keyword) {
		return this._$http({
			url: '/streams/search/' + keyword,
			method: 'GET'
		});
	}

	single(id) {
		return this._$http({
			url: '/streams/' + id,
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