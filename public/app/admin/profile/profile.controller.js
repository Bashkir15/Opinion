(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ProfileController', ProfileController);

	/* @ngInject */
	function ProfileController ($scope, $state, $stateParams, $location, appAuth, appUsers, Upload) {
		var vm = this;
		var userId = $stateParams.userId;
		vm.stateName = $state.current.name;
		vm.selfProfile = (userId === appAuth.getUser()._id);
		vm.profile = [];
		vm.getProfile = getProfile;
		vm.follow = follow;
		vm.uploadImage = uploadImage;

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

		function uploadImage (file) {
			if (file) {
				Upload.upload({
					url: '/users/uploadPicture/' + userId,
					file: file
				}).progress(function (evt) {
					vm.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
				}).success(function (data, status, headers, config) {
					vm.getProfile({reload: true});
				});
			}
		}

		$scope.$watch(function() {
			return $scope.file
		}, function() {
			vm.uploadImage($scope.file);
		});

		getProfile();
	}
}());