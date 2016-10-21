class Stream {
	constructor($http) {
		'ngInject';

		this._$http = $http;
	}

	create(credentials) {
		return this._$http({
			url: '/streams',
			method: 'POST',
			data: credentials
		}).then((response) => {
			console.log(response);
		});
	}
}

export default Stream