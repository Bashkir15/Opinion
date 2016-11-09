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

	search(keyword) {
		return this._$http({
			url: '/users/search/' + keyword,
			method: 'GET'
		});
	}

	follow(id) {
		return this._$http({
			url: '/users/' + id + '/follow',
			method: 'POST'
		});
	}

	unfollow(id) {
		return this._$http({
			url: '/users/' + id + '/unfollow',
			method: 'POST'
		});
	}
}

export default UsersService