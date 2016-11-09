function streamsConfig ($stateProvider) {
	'ngInject';

	$stateProvider.state('app.streamsList', {
		url: '/streams',
		templateUrl: './app/pages/streams/list/list.html',
		controller: 'StreamsListCtrl',
		controllerAs: '$ctrl'
	});

	$stateProvider.state('app.singleStream', {
		url: '/streams/:streamId',
		templateUrl: './app/pages/streams/single/single.html',
		controller: 'StreamsSingleCtrl',
		controllerAs: '$ctrl'
	});

	$stateProvider.state('app.trendingStreams', {
		url: '/trending',
		templateUrl: './app/pages/streams/trending/trending.html',
		controller: 'TrendingStreamsCtrl',
		controllerAs: '$ctrl'
	});

	$stateProvider.state('app.subscribedStreams', {
		url: '/streams/subscribed',
		templateUrl: './app/pages/streams/subscribed/subscribed.html',
		controller:'SubscribedStreamsCtrl',
		controllerAs: "$ctrl"
	});
}

export default streamsConfig