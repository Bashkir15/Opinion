(function() {
	'use strict';

	angular.module('opinionated.landing')
	.controller('HomeController', HomeController);

	/* @ngInject */
	function HomeController ($state, $scope, $rootScope, appAuth, appUsers, appStreams, appThreads, appToast) {
		var vm = this;
	}
}());