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
		}).then((response) => {
			this._Storage.set('opinion-token', response.data.res.token);
		});
	}
}

export default Auth