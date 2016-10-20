function appConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
	'ngInject';

	//$locationProvider.html5Mode(true);


	$stateProvider.state('app', {
		abstract: true,
		templateUrl: './app/pages/app-layout.html'
	});

	$urlRouterProvider.otherwise("/");
}

export default appConfig;