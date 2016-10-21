function authInterceptor($window, Storage) {
	'ngInject';

	return {
		request: (config) => {
			config.headers.Authorization = 'Bearer ' + Storage.get('opinion-token');
			return config;
		},

		responseError: (response) => {
			if (response.status == '401' || response.status == '403') {
				Storage.remove('opinion-token');
				$state.go('app.home');
				alert('unauthorized');
			}

			if (response.status == '404') {
				$state.go('app.home');
				alert('page not found');
			}
		}
	}
}

export default authInterceptor