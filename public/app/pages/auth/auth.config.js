function authConfig ($stateProvider) {
	'ngInject';

	$stateProvider.state('app.signup', {
		url: '/signup',
		templateUrl: './app/pages/auth/signup/signup.html'
	});

	$stateProvider.state('app.login', {
		url: '/login',
		templateUrl: './app/pages/auth/login/login.html'
	});
}

export default authConfig