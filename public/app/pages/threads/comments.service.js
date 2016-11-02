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
}

export default commentsService