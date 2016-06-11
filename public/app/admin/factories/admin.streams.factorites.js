(function() {
	'use strict';

	angular.module('opinionated.admin')
	.factory('appStreams', appStreams);

	/* @ngInject */
	function appStream ($resource) {
		return {
			single: $resource('streams/:streamId/:action', {
				streamId: '@_id'
			})
		};
	}
}());