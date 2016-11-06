class UsersService {
	constructor($http) {
		'ngInject';

		this._$http = $http;
	}

	single(username) {
		return this._$http({
			url: '/users/' + username,
			method: 'GET'
		});
	}
}

export default UsersService