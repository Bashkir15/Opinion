class Auth {
	constructor($http, Storage) {
		'ngInject';

		this._$http = $http;
		this._Storage = Storage;
	}

	signup(credentials) {
		return this._$http({
			url: '/users',
			method: 'POST',
			data: credentials
		});
	}

	login(credentials) {
		return this._$http({
			url: '/users/authenticate',
			method: 'POST',
			data: credentials
		});
	}

	forgot(data) {
		return this._$http({
			url: '/users/forgot',
			method: 'POST',
			data: data
		});
	}

	reset(data) {
		return this._$http({
			url: '/users/reset',
			method: 'POST',
			data: data
		});
	}

	updateProfile(id, data) {
		return this._$http({
			url: '/users/' + id + '/updateProfile',
			method: 'POST',
			data: data
		});
	}

	isLoggedIn() {
		return this._Storage.get('opinion-token');
	}

	getUser() {
		var serialized = this._Storage.get('user');

		if (serialized) {
			return angular.fromJson(serialized)
		} else {
			return;
		}
	}
}

export default Auth