(function() {
	'use strict';

	angular.module('opinionated.admin')
	.config(streamsConfig);

	/* @ngInject */
	function streamsConfig ($stateProvider, $urlRouterProvider) {
		$stateProvider.state('streams', {
			templateUrl: '/app/admin/streams/streams.tmpl.html',
			abstract: true
		});

		$stateProvider.state('streamsCreate', {
			url: '/create-stream',
			templateUrl: '/app/admin/streams/create/streams.create.tmpl.html',
			controller: 'StreamsCreateController',
			controllerAs: 'vm'
		});

		$stateProvider.state('streams.streamsList', {
			url: '/streams/list',
			templateUrl: '/app/admin/streams/list/streams.list.tmpl.html',
			controller: 'StreamsListController',
			controllerAs: 'vm'
		});

		$stateProvider.state('streams.streamsSingle', {
			url: '/streams/:streamId',
			templateUrl: '/app/admin/streams/single/streams.single.tmpl.html',
			controller: 'StreamsSingleController',
			controllerAs: 'vm'
		});

		$stateProvider.state('streams.streamsEdit', {
			url: '/streams/edit/:streamId',
			templateUrl: '/app/admin/streams/edit/streams.edit.tmpl.html',
			controller: 'StreamsEditController',
			controllerAs: 'vm'
		});
		
		$stateProvider.state('streams.streamsThread', {
			url: '/streams/:streamId/:threadId',
			templateUrl: '/app/admin/threads/thread.tmpl.html',
			controller: 'ThreadController',
			controllerAs: 'vm'
		});

	}
}());