(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('StreamsSingleController', StreamsSingleController);

	/* @ngInject */
	function StreamsSingleController ($state, $stateParams, $scope, $mdDialog, $location, appAuth, appToast, appStreams, appThreads) {
		var vm = this;
		var streamId = $stateParams.streamId;
		vm.stream = [];
		vm.feed = [];
		vm.getStream = getStream;
		vm.updateFeed = updateFeed;
		vm.openAddPost = openAddPost;
		vm.goToThread = goToThread;
		vm.feedPage = 0;
		vm.lastUpdated = 0;
		vm.feedFilter = '';

		function getStream () {
			var streamData = appStreams.single.get({streamId: streamId}, function() {
				vm.stream = [streamData.res.record];
			});
		}

		function updateFeed (options) {
			options = options || {};

			var threadData = appThreads.list.get({
				streamId: streamId,
				page: vm.feedPage,
				timestamp: vm.lastUpdated,
				filter: vm.feedFilter
			}, function() {
				if (vm.feedFilter) {
					vm.feed = [];
				}

				if (!options.append) {
					vm.feed = threadData.res.records.concat(vm.feed);
				} else {
					vm.feed = vm.feed.concat(threadData.res.records);
				}

				vm.noMorePages = !threadData.res.noMorePages;
				vm.lastUpdated = Date.now();
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

		function goToThread (item) {
			$location.url('streams/' + streamId + '/' + item._id);
		}

		getStream();
		updateFeed();
	}
}());