(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ProfileController', ProfileController);

	/* @ngInject */
	function ProfileController ($scope, $state, $stateParams, $location, $mdDialog, appAuth, appUsers, Upload) {
		var vm = this;
		var userId = $stateParams.userId;
		vm.stateName = $state.current.name;
		vm.selfProfile = (userId === appAuth.getUser()._id);
		vm.profile = [];
		vm.getProfile = getProfile;
		vm.follow = follow;
		vm.uploadImage = uploadImage;
		vm.openUpdateProfile = openUpdateProfile;

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

		function openUpdateProfile() {
			$mdDialog.show({
				controller: [
					'$scope',
					'$mdDialog',
					function ($scope, $mdDialog) {
						$scope.reset = function() {
							$scope.updateProfileForm.$setUntouched();
							$scope.updateProfileForm.$setPristine();
							$scope.gender = $scope.occupation = $scope.phone = $scope.birthday = $scope.interests = $scope.bio = '';
						};

						$scope.close = function() {
							$mdDialog.hide();
						};

						$scope.update = function () {
							var user = appUsers.single.get({userId: userId}, function() {
								user.gender = $scope.gender;
								user.occupation = $scope.occupation;
								user.phone = $scope.phone;
								user.birthday = $scope.birthday;
								user.interests = $scope.interests;
								user.bio = $scope.bio;

								user.$updateProfile({userId: userId}, function (response) {
									if (response.success) {
										$scope.reset();
										vm.getProfile({reload: true});
										$mdDialog.hide();
										appToast('You have successfully updated your profile' + response.res.record.name);
									} else {
										appToast(response.res.message);
									}
								});
							});
							
						};
					}
				],
				templateUrl: '/app/admin/profile/dialogs/update.profile.dialog.tmpl.html'
			}).finally(function() {
				vm.getProfile({reload: true});
			});
		}


		getProfile();
	}
}());