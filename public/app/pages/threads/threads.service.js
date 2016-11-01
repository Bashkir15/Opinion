class Thread {
	constructor($http) {
		'ngInject';

		this._$http = $http;
	}

	get(id, options) {
		this._$http({
			url: '/threads/' + id + '/threads',
			method: 'GET',
			params: {
				timestamp: options.timestamp,
				filter: options.filter
			}
		});
	}
}

export default Thread