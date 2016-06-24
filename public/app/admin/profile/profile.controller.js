(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ProfileController', ProfileController);

	/* @ngInject */
	function ProfileController ($state, $stateParams, $scope, appAuth, appUsers) {
		var userId = $stateParams.userId;
		$scope.selfProfile = (userId === appAuth.getUser()._id);
		$scope.getProfile = function() {
			appUsers.single.get({userId: userId}).$promise.then(function (response) {
				response.res.profile = response.res.record;
				angular.extend($scope, response.res);
			});
		};

		$scope.follow = function() {
			$scope.alreadyFollowing = '';
			var user = appUsers.single.get({userId: userId}, function() {
				user.$follow({userId: userId}, function() {
					$scope.getProfile();
				});
			});
		};

		$scope.getProfile();
	}
}());