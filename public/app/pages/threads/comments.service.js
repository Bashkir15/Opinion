class commentsService {
	constructor($http) {
		'ngInject';

		this._$http = $http;
	}

	create(credentials) {
		return this._$http({
			url: '/comments',
			method: 'POST',
			data: credentials
		});
	}

	single(id) {
		return this._$http({
			url: '/comments/' + id,
			method: 'GET'
		});
	}

	get(id, options) {
		return this._$http({
			url: '/comments/threads/' + id,
			method: 'GET',
			params: {
				timestamp: options.timestamp,
				filter: options.filter,
				page: options.page
			}
		});
	}

	userComments(id, options) {
		return this._$http({
			url: '/comments/user/' + id,
			method: 'GET',
			params: {
				timestamp: options.timestamp,
				filter: options.filter,
				page: options.page
			}
		});
	}

	userSaved(id, options) {
		return this._$http({
			url: '/comments/saved/' + id,
			method: 'GET',
			params: {
				timestamp: options.timestamp,
				filter: options.filter,
				page: options.page
			}
		});
	}

	like(id) {
		return this._$http({
			url: '/comments/' + id + '/like',
			method: 'POST'
		});
	}

	dislike(id) {
		return this._$http({
			url: '/comments/' + id + '/dislike',
			method: 'POST'
		});
	}

	save(id) {
		return this._$http({
			url: '/comments/' + id + '/save',
			method: 'POST'
		});
	}

	unsave(id) {
		return this._$http({
			url: '/comments/' + id + '/unsave',
			method: 'POST'
		});
	}

	modify(id, data) {
		return this._$http({
			url: '/comments/' + id + '/modify',
			method: 'POST',
			data: data
		});
	}

	remove(id) {
		return this._$http({
			url: '/comments/' + id + '/remove',
			method: 'DELETE'
		});
	}
}

export default commentsService