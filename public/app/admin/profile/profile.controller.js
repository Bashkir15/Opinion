(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ProfileController', ProfileController);

	/* @ngInject */
	function ProfileController ($scope, $state, $stateParams, appAuth, appUsers) {
		var vm = this;
		var userId = $stateParams.userId;
		vm.profile = [];
		vm.getProfile = getProfile;

		function getProfile() {
			var user = appUsers.single.get({userId: userId}, function() {
				vm.profile = [user.res.record];
			});
		}

		getProfile();
	}
}());