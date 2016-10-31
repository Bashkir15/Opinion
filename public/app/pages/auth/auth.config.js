function authConfig ($stateProvider) {
	'ngInject';

	$stateProvider.state('app.signup', {
		url: '/signup',
		templateUrl: './app/pages/auth/signup/signup.html'
	});
}

export default authConfig