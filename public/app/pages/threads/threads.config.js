function threadConfig($stateProvider) {
	'ngInject';

	$stateProvider.state('app.createThread', {
		url: '/create-thread',
		templateUrl: './app/pages/threads/create/create.html'
	});

	$stateProvider.state('app.singleThread', {
		url: '/:threadId',
		templateUrl: './app/pages/threads/single/single.html',
		controller: 'singleThreadCtrl',
		controllerAs: '$ctrl'
	});
}

export default threadConfig