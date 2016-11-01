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
}

export default threadService