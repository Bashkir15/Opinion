function authConfig ($stateProvider, $urlRouterProvider) {
	'ngInject';

	$stateProvider.state('app.auth', {
		abstract: true,
		templateUrl: './app/pages/auth/auth.html'
	});

	$stateProvider.state('app.auth.signup', {
		url: '/signup',
		controller: 'signupCtrl',
		controllerAs: '$ctrl',
		templateUrl: './app/pages/auth/signup/signup.html'
	});

	$stateProvider.state('app.auth.login', {
		url: '/login',
		controller: 'loginCtrl',
		controllerAs: '$ctrl',
		templateUrl: './app/pages/auth/login/login.html'
	});
}

export default authConfig