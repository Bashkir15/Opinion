(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ProfileController', ProfileController);

	/* @ngInject */
	function ProfileController ($scope, $state, $stateParams, $location, appAuth, appUsers) {
		var vm = this;
		var userId = $stateParams.userId;
		vm.selfProfile = (userId === appAuth.getUser()._id);
		vm.profile = [];
		vm.getProfile = getProfile;
		vm.follow = follow;

		function getProfile() {
			var profileData = appUsers.single.get({userId: userId}, function() {
				vm.profile = [profileData.res.record];
			});
		}

		function follow() {
			var user = appUsers.single.get({userId: userId}, function() {
				user.$follow({userId: userId}, function() {
					getProfile();
				});
			});
		}

		getProfile();
	}
}());