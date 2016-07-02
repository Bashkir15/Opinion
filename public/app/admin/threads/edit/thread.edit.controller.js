(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ThreadEditController', ThreadEditController);

	/* @ngInject */
	function ThreadEditController ($state, $stateParams, $location, appThreads, appToast) {
		var vm = this;
		var threadId = $stateParams.threadId;
		vm.edit = edit;
		vm.getThread = getThread;

		function edit (isValid) {
			if (isValid) {
				var thread = appThreads.single.get({threadId: threadId}, function() {
					thread.title = vm.thread.title;
					thread.content = vm.thread.content;

					thread.$modify({threadId: threadId}, function (response) {
						if (response.success) {
							appToast.success('You just edited your thread: ' + response.res.record.title);
							window.history.go(-1);
						} else {
							appToast.error(response.res.message);
						}
					});
				});
			} else {
				appToast.error('Hmm, something seems to be missing...');
			}
		}

		function getThread() {
			var threadData = appThreads.single.get({threadId: threadId}, function() {
				vm.thread = threadData.res.record;
				vm.thread.title = vm.thread.title;
				vm.thread.content = vm.thread.content;
			});
		}

		getThread();
	}
}());