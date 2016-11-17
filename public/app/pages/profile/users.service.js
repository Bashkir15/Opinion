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

	activity(id) {
		return this._$http({
			url: '/activity/feed/' + id,
			method: 'GET'
		});
	}

	notifications() {
		return this._$http({
			url: '/users/notifications',
			method: 'GET'
		});
	}

	markRead(id, data) {
		return this._$http({
			url: '/users/notifications/' + id,
			method: 'POST',
			data: data
		});
	}

	profileReset(id, data) {
		return this._$http({
			url: '/users/' + id + '/profileReset',
			method: 'POST',
			data: data
		});
	}
}

export default UsersService