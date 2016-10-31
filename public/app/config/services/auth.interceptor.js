function authInterceptor(Storage) {
	'ngInject';

	return {
		request: (config) => {
			config.headers.Authorization = "Bearer " + Storage.get('opinion-token');
			return config;
		},

		responseError: (response) => {
			if (response.status == '401' || response.status == '403') {
				Storage.remove('opinion-token');
				$state.go('app.home');
			}

			if (response.status == '404') {
				$state.go('app.home');
			}
		}
	}
}

export default authInterceptor