function streamsConfig ($stateProvider) {
	'ngInject';

	$stateProvider.state('app.streamsList', {
		url: '/streams',
		templateUrl: './app/pages/streams/list/list.html',
		controller: 'StreamsListCtrl',
		controllerAs: '$ctrl'
	});
}

export default streamsConfig