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

	$stateProvider.state('app.updateProfile', {
		url: '/:userId/update-profile',
		templateUrl: './app/pages/auth/profileInfo/update-profile.html',
		controller: 'UpdateProfileController',
		controllerAs: '$ctrl'
	});
}

export default authConfig