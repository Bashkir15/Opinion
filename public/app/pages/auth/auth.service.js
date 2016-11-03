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
		}).then((response) => {
			console.log(response);
		});
	}

	login(credentials) {
		return this._$http({
			url: '/users/authenticate',
			method: 'POST',
			data: credentials
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