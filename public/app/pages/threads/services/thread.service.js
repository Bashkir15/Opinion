class threadService {
	constructor($http) {
		this._$http = $http;
	}

	create(credentials) {
		return this._$http({
			url: '/threads',
			method: 'POST',
			data: credentials
		}).then((response) => {
			console.log(response);
		});
	}

	get(id) {
		return this._$http({
			url: '/threads/' + id + '/threads',
			method: 'GET'
		});
	}
}

export default threadService