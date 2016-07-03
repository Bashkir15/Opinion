(function() {
	'use strict';

	angular.module('opinionated.authentication')
	.controller('ProfileInfoController', ProfileInfoController);

	/* @ngInject */
	function ProfileInfoController ($state, $stateParams, $scope, $location, appAuth, appUsers, appToast, Upload) {
		var vm = this;
		var userId = $stateParams.userId;
		vm.user = appAuth.getUser();
		vm.submit = submit;
		vm.uploadImage = uploadImage;
		vm.uploaded = '';
		vm.profile = {
			gender: '',
			occupation: '',
			phone: '',
			birthday: '',
			interests: '',
			bio: ''
		};

		function submit() {
			var user = appUsers.single.get({userId: userId}, function() {
				user.gender = vm.profile.gender;
				user.occupation = vm.profile.occupation;
				user.phone = vm.profile.phone;
				user.birthday = vm.profile.birthday;
				user.interests = vm.profile.interests;
				user.bio = vm.profile.bio;

				user.$updateProfile({userId: userId}, function (response) {
					if (response.success) {
						appToast.success('You\'re getting off to a great start, ' + vm.user.name);
						$location.url('profile/' + userId + '/overview');
					} else {
						appToast.error(reponse.res.message);
					}
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
					appToast.success('Your photo has been uploaded!');
					vm.uploaded = true;
				});
			}
		}

		$scope.$watch(function() {
			return $scope.file
		}, function() {
			vm.uploadImage($scope.file);
		});
	}
}());