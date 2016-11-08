class UsersService {
	constructor($http) {
		'ngInject';

		this._$http = $http;
	}

	single(id) {
		return this._$http({
			url: '/users/' + id,
			method: 'GET'
		});
	}
}

export default UsersService