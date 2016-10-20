class Auth {
	constructor($http) {
		this._$http = $http;

	}

	signup(credentials) {
		return this._$http({
			url: '/users',
			method: 'POST',
			data: {
				user: credentials
			}
		}).then((response) => {
			console.log(response);
		});
	}
}

export default Auth