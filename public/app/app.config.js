import authInterceptor from './config/services/auth.interceptor'

function appConfig ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
	'ngInject';

	$httpProvider.interceptors.push(authInterceptor);

	$stateProvider.state('app', {
		abstract: true,
		templateUrl: './app/pages/app-layout.html'
	});

	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
}

export default appConfig