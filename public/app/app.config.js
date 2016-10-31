function appConfig ($stateProvider, $urlRouterProvider) {
	'ngInject';

	$stateProvider.state('app', {
		abstract: true,
		templateUrl: './app/pages/app-layout.html'
	});

	$urlRouterProvider.otherwise('/');
}

export default appConfig