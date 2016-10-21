import authInterceptor from './config/services/auth.interceptor'

function appConfig ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
	'ngInject';

	$httpProvider.interceptors.push(authInterceptor);
	//$locationProvider.html5Mode(true);


	$stateProvider.state('app', {
		abstract: true,
		templateUrl: './app/pages/app-layout.html'
	});

	$urlRouterProvider.otherwise("/");
}

export default appConfig;