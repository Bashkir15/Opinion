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

	get(id, options) {
		return this._$http({
			url: '/comments/' + id,
			method: 'GET'
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
}

export default commentsService