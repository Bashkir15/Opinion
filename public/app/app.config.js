import authInterceptor from './config/services/auth.interceptor'

function appConfig ($stateProvider, $urlRouterProvider, $httpProvider) {
	'ngInject';

	$httpProvider.interceptors.push(authInterceptor);

	$stateProvider.state('app', {
		abstract: true,
		templateUrl: './app/pages/app-layout.html'
	});

	$urlRouterProvider.otherwise('/');
}

export default appConfig