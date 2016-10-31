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

	get() {
		return this._$http({
			url: '/streams',
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