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
				filter: options.filter,
				page: options.page
			}
		});
	}

	search(keyword) {
		return this._$http({
			url: '/threads/search/' + keyword,
			method: 'GET'
		});
	}

	unHome(options) {
		return this._$http({
			url: '/threads/unauthHome',
			method: 'GET',
			params: {
				timestamp: options.timestamp,
				filter: options.filter,
				page: options.page
			}
		});
	}

	authedHome(options) {
		return this._$http({
			url: '/threads/authedHome',
			method: 'GET',
			params: {
				timestamp: options.timestamp,
				filter: options.filter,
				page: options.page
			}
		});
	}

	userThreads(id, options) {
		return this._$http({
			url: '/threads/user/' + id,
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
			url: '/threads/saved/' + id,
			method: 'GET',
			params: {
				timestamp: options.timestamp,
				filter: options.filter,
				page: options.page
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

	modify(id, data) {
		return this._$http({
			url: '/threads/' + id + '/modify',
			method: 'POST',
			data: data
		});
	}

	remove(id) {
		return this._$http({
			url: '/threads/' + id + '/remove',
			method: 'DELETE'
		});
	}
}

export default threadService