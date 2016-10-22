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
}

export default streamConfig