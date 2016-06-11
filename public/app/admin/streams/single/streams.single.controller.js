(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('StreamsSingleController', StreamsSingleController);

	/* @ngInject */
	function StreamsSingleController ($state, $stateParams, $scope, $mdDialog, appAuth, appToast, appStreams, appThreads) {
		var vm = this;
		var streamId = $stateParams.streamId;
		vm.stream = [];
		vm.getStream = getStream;
		vm.openAddPost = openAddPost;

		function getStream () {
			var streamData = appStreams.single.get({streamId: streamId}, function() {
				vm.stream = [streamData.res.record];
			});
		}

		function openAddPost() {
			$mdDialog.show({
				controller: [
					'$scope',
					'$mdDialog',
					function ($scope, $mdDialog) {
						$scope.reset = function() {
							$scope.title = '';
							$scope.content = '';
							$scope.addPostForm.$setPristine();
							$scope.addPostForm.$setUntouched();
						};

						$scope.create = function (isValid) {
							if (isValid) {
								var thread = new appThreads.single({
									title: this.title,
									content: this.content,
									stream: streamId
								});

								thread.$save(function (response) {
									if (response.success) {
										$scope.reset();
										appToast('yay!');
										vm.updateFeed();
										$mdDialog.hide();
									} else {
										appToast(response.res.message);
									}
								});
							} else {
								appToast('uh oh');
							}
						};

						$scope.close = function() {
							$mdDialog.hide();
						};
					}
				],
				templateUrl: '/app/admin/threads/dialogs/create.stream.post.tmpl.html'
			}).finally(function() {
				vm.updateFeed({reload: true});
			})
		}

		getStream();
	}
}());