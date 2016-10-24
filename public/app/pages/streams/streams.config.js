function streamConfig ($stateProvider) {
	'ngInject';

	$stateProvider.state('app.streamsCreate', {
		url: '/create-stream',
		controller: 'StreamCreateController',
		controllerAs: '$ctrl',
		templateUrl: './app/pages/streams/create/create.html'
	});

	$stateProvider.state('app.streamsList', {
		url: '/streams',
		controller: 'StreamListController',
		controllerAs: '$ctrl',
		templateUrl: './app/pages/streams/list/list.html'
	});

	$stateProvider.state('app.singleStream', {
		url: '/streams/:streamId',
		controller: 'StreamSingleController',
		controllerAs: '$ctrl',
		templateUrl: './app/pages/streams/single/single.html',
	});
}

export default streamConfig