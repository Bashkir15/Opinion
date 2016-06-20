(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ProfileController', ProfileController);

	/* @ngInject */
	function ProfileController ($scope, $state, $stateParams, appAuth, appUsers, Upload) {
		var vm = this;
		var userId = $stateParams.userId;
		vm.profile = [];
		vm.selfProfile = userId === appAuth.getUser()._id;
		vm.getProfile = getProfile;
		vm.follow = follow;
		vm.unfollow = unfollow;
		vm.uploadUserImage = uploadUserImage;

		function getProfile() {
			var user = appUsers.single.get({userId: userId}, function() {
				vm.profile = [user.res.record];
			});
		}

		function follow (profile) {
			var obj = appUsers.single.get({userId: userId}, function() {
				obj.$follow({userId: userId}, function() {
					vm.getProfile();
				});
			});
		}

		function unfollow (profile) {
			var user = appUsers.single.get({userId: userId}, function() {
				user.$unfollow({userId: userId}, function() {
					vm.getProfile();
				});
			});
		}

		function uploadUserImage (file) {
			if (file) {
				Upload.upload({
					url: '/users/' + userId + '/imageUpload',
					file: file
				}).progress(function (evt) {
					vm.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
				}).success(function (data, status, headers, config) {
					vm.getProfile({reload: true});
				});
			}
		}

		$scope.$watch(function() {
			return $scope.file;
		}, function() {
			vm.uploadUserImage($scope.file);
		});

		getProfile();
	}
}());