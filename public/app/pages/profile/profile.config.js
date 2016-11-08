function profileConfig ($stateProvider) {
	'ngInject';

	$stateProvider.state('app.profile', {
		url: '/profile/:username',
		templateUrl: './app/pages/profile/profile.tmpl.html',
		controller: 'ProfileController',
		controllerAs: '$ctrl'
	});

	$stateProvider.state('app.profile.overview', {
		url: '/overview',
		templateUrl: './app/pages/profile/overview/overview.html'
	});

	$stateProvider.state('app.profile.threads', {
		url: '/threads',
		templateUrl: './app/pages/profile/threads/threads.html'
	});
}

export default profileConfig;