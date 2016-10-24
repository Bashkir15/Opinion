function threadConfig($stateProvider) {
	'ngInject';

	$stateProvider.state('app.createThread', {
		url: '/create-thread',
		templateUrl: './app/pages/threads/create/create.html'
	});
}

export default threadConfig