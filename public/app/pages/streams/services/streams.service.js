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

	get() {
		return this._$http({
			url: '/streams',
			methods: 'GET'
		});
	}
}

export default Stream