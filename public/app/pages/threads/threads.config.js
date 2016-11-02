function threadsConfig ($stateProvider) {
	'ngInject';

	$stateProvider.state('app.singleThread', {
		url: '/:streamId/:threadId',
		templateUrl: './app/pages/threads/single/single.html',
		controller: 'threadsSingleCtrl',
		controllerAs: '$ctrl'
	});
}

export default threadsConfig