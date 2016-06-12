(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ThreadController', ThreadController);

	/* @ngInject */
	function ThreadController ($scope, $state, $stateParams, $mdDialog, appAuth, appThreads, appToast) {
		var vm = this;
		var streamId = $stateParams.streamId;
		var threadId = $stateParams.threadId;
		vm.threads = [];
		vm.getThread = getThread;

		function getThread() {
			var threadData = appThreads.single.get({threadId: threadId}, function() {
				vm.threads = [threadData.res.record];
			});
		}

		getThread();
	}
}());