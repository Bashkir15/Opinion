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
}

export default threadService