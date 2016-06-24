(function() {
	'use strict';

	angular.module('opinionated.authentication')
	.controller('LogoutController', LogoutController);

	/* @ngInject */
	function LogoutController ($rootScope, $state, appStorage) {
		appStorage.remove('user');
		appStorage.remove('opinion-token');
		$rootScope.$broadcast('loggedOut');
		$state.go('home');
	}
}());