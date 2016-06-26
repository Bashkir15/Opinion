(function() {
	'use strict';

	angular.module('opinionated.admin')
	.config(streamsConfig);

	/* @ngInject */
	function streamsConfig ($stateProvider) {
		$stateProvider.state('streams', {
			templateUrl: '/app/admin/streams/streams.tmpl.html',
			abstract: true
		});

		$stateProvider.state('streams.create', {
			url: '/streams/create-stream',
			templateUrl: '/app/admin/streams/create/streams.create.tmpl.html',
			controller: 'StreamsCreateController',
			controllerAs: 'vm'
		});


		$stateProvider.state('streams.list', {
			url: '/streams/list',
			templateUrl: '/app/admin/streams/list/streams.list.tmpl.html',
			controller: 'StreamsListController',
			controllerAs: 'vm'
		});

		$stateProvider.state('streams.single', {
			url: '/streams/:streamId',
			templateUrl: '/app/admin/streams/single/streams.single.tmpl.html',
			controller: 'StreamsSingleController',
			controllerAs: 'vm'
		});

		$stateProvider.state('streams.edit', {
			url: '/streams/:streamId/edit',
			templateUrl: '/app/admin/streams/edit/streams.edit.tmpl.html',
			controller: 'StreamsEditController',
			controllerAs: 'vm'
		});

		$stateProvider.state('streams.thread', {
			url: '/streams/:streamId/:threadId',
			templateUrl: '/app/admin/threads/thread.tmpl.html',
			controller: 'ThreadController',
			controllerAs: 'vm'
		});

		$stateProvider.state('streams.commentEdit', {
			url: '/streams/:threadId/:commentId/edit',
			templateUrl: '/app/admin/comments/edit/edit.comment.tmpl.html',
			controller: 'EditCommentController',
			controllerAs: 'vm'
		});
	}
}());