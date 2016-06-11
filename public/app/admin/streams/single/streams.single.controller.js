(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('StreamsSingleController', StreamsSingleController);

	/* @ngInject */
	function StreamsSingleController ($state, $stateParams, $scope, appAuth, appToast, appStreams) {
		var vm = this;
		var streamId = $stateParams.streamId;
		vm.stream = [];
		vm.getStream = getStream;

		function getStream () {
			var streamData = appStreams.single.get({streamId: streamId}, function() {
				vm.stream = [streamData.res.record];
			});
		}

		getStream();
	}
}());