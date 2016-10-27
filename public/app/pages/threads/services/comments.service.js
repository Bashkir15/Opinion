class commentsService {
	constructor($http) {
		this._$http = $http;
	}

	create(credentials) {
		return this._$http({
			url: '/comments',
			method: 'POST',
			data: credentials
		}).then((response) => {
			console.log(response);
		});
	}

	get(id) {
		return this._$http({
			url: '/comments/' + id,
			method: 'GET'
		});
	}
}

export default commentsService