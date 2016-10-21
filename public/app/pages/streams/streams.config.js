function streamConfig ($stateProvider) {
	'ngInject';

	$stateProvider.state('app.streamsCreate', {
		url: '/create-stream',
		controller: 'StreamCreateController',
		controllerAs: '$ctrl',
		templateUrl: './app/pages/streams/create/create.html'
	});
}

export default streamConfig