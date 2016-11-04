class threadService {
	constructor($http) {
		'ngInject';

		this._$http = $http;
	}

	create(data) {
		return this._$http({
			url: '/threads',
			method: 'POST',
			data: data
		});
	}

	get(id, options) {
		return this._$http({
			url: '/threads/' + id + '/threads',
			method: 'GET',
			params: {
				timestamp: options.timestamp,
				filter: options.filter
			}
		});
	}

	single(id) {
		return this._$http({
			url: './threads/' + id,
			method: 'GET'
		});
	}

	save(id) {
		return this._$http({
			url: '/threads/' + id + '/save',
			method: 'POST'
		});
	}

	unsave(id) {
		return this._$http({
			url: '/threads/' + id + '/unsave',
			method: 'POST'
		});
	}

	like(id) {
		return this._$http({
			url: '/threads/' + id + '/like',
			method: 'POST'
		});
	}

	unlike(id) {
		return this._$http({
			url: '/threads/' + id + '/dislike',
			method: 'POST'
		});
	}
}

export default threadService