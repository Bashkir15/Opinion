(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ProfileController', ProfileController);

	/* @ngInject */
	function ProfileController ($scope, $state, $stateParams, $mdDialog, appAuth, appUsers, appToast, Upload) {
		var vm = this;
		var userId = $stateParams.userId;
		vm.profile = [];
		vm.selfProfile = userId === appAuth.getUser()._id;
		vm.getProfile = getProfile;
		vm.follow = follow;
		vm.unfollow = unfollow;
		vm.uploadUserImage = uploadUserImage;
		vm.openUpdateProfile = openUpdateProfile;

		function getProfile() {
			var user = appUsers.single.get({userId: userId}, function() {
				vm.profile = [user.res.record];
			});
		}

		function follow (profile) {
			var user = new appUsers.follow({
				userId: profile._id,
			});

			user.$save(function (response) {
				if (response.success) {
					appToast('user has been followed');
					vm.getProfile({reload: true});
				} else {
					appToast(response.res.message);
				}
			});
		}

		function unfollow (profile) {
			var user = new appUsers.single.get({userId: userId}, function() {
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

								user.$profile({userId: userId}, function (response) {
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
				templateUrl: '/app/admin/profile/dialogs/update.profile.tmpl.html'
			}).finally(function() {
				vm.getProfile({reload: true});
			});
		}

		getProfile(); 
	} 
}());