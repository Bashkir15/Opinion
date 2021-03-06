function profileConfig ($stateProvider) {
	'ngInject';

	$stateProvider.state('app.profile', {
		url: '/profile/:userId',
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
		templateUrl: './app/pages/profile/threads/threads.html',
		controller: 'ProfileThreadsController',
		controllerAs: '$ctrl'
	});

	$stateProvider.state('app.profile.comments', {
		url: '/comments',
		templateUrl: './app/pages/profile/comments/comments.html',
		controller: 'ProfileCommentsController',
		controllerAs: '$ctrl'
	});

	$stateProvider.state('app.profile.saved', {
		url: '/saved',
		templateUrl: '/app/pages/profile/saved/saved.html',
		controller: 'ProfileSavedController',
		controllerAs: '$ctrl'
	});

	$stateProvider.state('app.profile.activity', {
		url: '/activity',
		templateUrl: './app/pages/profile/activity/activity.html',
		controller: 'ProfileActivityController',
		controllerAs: '$ctrl'
	});
}

export default profileConfig;