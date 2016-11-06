function profileConfig ($stateProvider) {
	'ngInject';

	$stateProvider.state('app.profile', {
		url: '/profile/:userName',
		templateUrl: './app/pages/profile/profile.tmpl.html',
		controller: 'ProfileController',
		controllerAs: '$ctrl'
	});

	$stateProvider.state('app.profile.overview', {
		url: '/overview',
		templateUrl: './app/pages/profile/overview/overview.html'
	});
}

export default profileConfig;