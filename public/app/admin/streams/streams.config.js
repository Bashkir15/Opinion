(function() {
	'use strict';

	angular.module('opinionated.admin')
	.config(streamsConfig);

	/* @ngInject */
	function streamsConfig ($stateProvider, $urlRouterProvider) {
		$stateProvider.state('streamsCreate', {
			url: '/create-stream',
			templateUrl: '/app/admin/streams/create/streams.create.tmpl.html',
			controller: 'StreamsCreateController',
			controllerAs: 'vm'
		});

		$stateProvider.state('streamsList', {
			url: '/streams/list',
			templateUrl: '/app/admin/streams/list/streams.list.tmpl.html',
			controller: 'StreamsListController',
			controllerAs: 'vm'
		});

		$stateProvider.state('streamsSingle', {
			url: '/streams/:streamId',
			templateUrl: '/app/admin/streams/single/streams.single.tmpl.html',
			controller: 'StreamsSingleController',
			controllerAs: 'vm'
		});
	}
}());