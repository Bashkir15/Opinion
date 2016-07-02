(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('StreamsSingleController', StreamsSingleController);

	/* @ngInject */
	function StreamsSingleController ($scope, $state, $stateParams, $mdDialog, $location, $timeout, appAuth, appStreams, appThreads, Upload, appToast) {
		var vm = this;
		var streamId = $stateParams.streamId;
		vm.stream = [];
		vm.feed = [];
		vm.getStream = getStream;
		vm.updateFeed = updateFeed;
		vm.addStreamImage = addStreamImage;
		vm.editStream = editStream;
		vm.openDeleteStream = openDeleteStream;
		vm.upvote = upvote;
		vm.downvote = downvote;
		vm.save = save;
		vm.unsave = unsave;
		vm.openAddPost = openAddPost
		vm.orderByScore = orderByScore;
		vm.orderByDate = orderByDate;
		vm.orderBySaves = orderBySaves;
		vm.orderByReplies = orderByReplies;
		vm.feedPage = 0;
		vm.lastUpdated = 0;
		vm.feedsFilter = '';
		vm.loadMore = loadMore;

		function getStream () {
			var streamData = appStreams.single.get({streamId: streamId}, function() {
				vm.stream = [streamData.res.record];
				vm.moderators = streamData.res.moderators;
				vm.isMod = streamData.res.isMod;
			});
		}

		function updateFeed (options) {
			options = options || {};

			var threadData = appThreads.list.get({
				streamId: streamId,
				page: vm.feedPage,
				timestamp: vm.lastUpdated,
				filter: vm.feedsFilter
			}, function() {
				if (vm.feedsFilter) {
					vm.feed = [];
				}

				if (!options.append) {
					vm.feed = threadData.res.records.concat(vm.feed);
				} else {
					vm.feed = vm.feed.concat(threadData.res.records);
				}

				vm.noMoreThreads = !threadData.res.morePages;
				vm.lastUpdated = Date.now();
			});
		}

		var feedsFilterTimeout;
		$scope.$watch('vm.feedsFilter', function (newValue, oldValue) {
			if (!newValue !== oldValue) {
				vm.feed = [];
			}

			$timeout.cancel(feedsFilterTimeout);
			feedsFilterTimeout = $timeout(function() {
				if (!newValue) {
					if (vm.feedsFilterEnabled) {
						vm.lastUpdated = 0;
						vm.updateFeed();
					}
				} else {
					vm.updateFeed();
				}

				vm.feedsFilterEnabled = vm.feedsFilter !== '';
			}, 500);
		}); 


		function addStreamImage (file, stream) {
			if (file) {
				Upload.upload({
					url: '/streams/' + streamId + '/imageUpload',
					file: file
				}).progress(function (evt) {
					vm.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
				}).success(function (data, status, headers, config) {
					vm.getStream({reload: true});
				});
			}
		}

		function editStream() {
			$location.url('streams/' + streamId + '/edit');
		}

		function openDeleteStream() {
			$mdDialog.show({
				controller: [
					'$scope',
					'$mdDialog',
					function ($scope, $mdDialog) {
						$scope.close = function() {
							$mdDialog.hide();
						}

						

						$scope.confirm = function() {
							var toDelete = appStreams.single.get({streamId: streamId}, function() {
								toDelete.$destroy({streamId: streamId}, function(response) {
									if (response.success) {
										appToast('You have just deleted a stream');
										$mdDialog.hide();
										$state.go('home');
									}
								});
							});
						};
					}
				],
				templateUrl: '/app/admin/streams/dialogs/delete.stream.dialog.tmpl.html',
			}).finally(function() {
				vm.updateFeed({reload: true});
			});
		}

		$scope.$watch(function() {
			return $scope.file
		}, function() {
			vm.addStreamImage($scope.file);
		});

		function upvote (item) {
			var thread = appThreads.single.get({threadId: item._id}, function() {
				thread.$upvote({threadId: item._id}, function() {
					angular.extend(item, thread.res.record);
				});
			});
		}

		function downvote (item) {
			var thread = appThreads.single.get({threadId: item._id}, function() {
				thread.$downvote({threadId: item._id}, function() {
					angular.extend(item, thread.res.record);
				});
			});
		}

		function save (item) {
			var thread = appThreads.single.get({threadId: item._id}, function() {
				thread.$doSave({threadId: item._id}, function() {
					angular.extend(item, thread.res.record);
				});
			});
		}

		function unsave (item) {
			var thread = appThreads.single.get({threadId: item._id}, function() {
				thread.$doUnsave({threadId: item._id}, function() {
					angular.extend(item, thread.res.record);
				}) ;
			});
		}

		function openAddPost() {
			$mdDialog.show({
				controller: [
					'$scope',
					'$mdDialog',
					function ($scope, $mdDialog) {
						$scope.close = function() {
							$mdDialog.hide();
						};

						$scope.reset = function() {
							$scope.addPostForm.$setUntouched();
							$scope.addPostForm.$setPristine();
							$scope.title = $scope.content = '';
						};

						$scope.create = function (isValid) {
							if (isValid) {
								var thread = new appThreads.single({
									title: $scope.title,
									content: $scope.content,
									stream: streamId
								});

								thread.$save(function (response) {
									if (response.success) {
										$scope.reset();
										$mdDialog.hide();
										$state.reload();
										appToast.success('You just created a thread called: ' + response.res.record.title);
									} else {
										appToast.error(response.res.message);
									}
								});
							} else {
								appToast.error('Hmm, something seems to be missing...');
							}
						};
					}
				],
				templateUrl: '/app/admin/threads/dialogs/threads.create.dialog.tmpl.html'
			}).finally(function() {
			});
		}

		function orderByScore() {
			if (vm.rowFilter == '-score') {
				vm.rowFilter = 'score';
			} else {
				vm.rowFilter = '-score';
			}
		}

		function orderByDate() {
			if (vm.rowFilter == 'created') {
				vm.rowFilter = '-created';
			} else {
				vm.rowFilter = 'created';
			}
		}

		function orderBySaves() {
			if (vm.rowFilter == '-saves.length') {
				vm.rowFilter = 'saves.length';
			} else {
				vm.rowFilter = '-saves.length';
			}
		}

		function orderByReplies() {
			if (vm.rowFilter == '-comments.length') {
				vm.rowFilter = 'comments.length';
			} else {
				vm.rowFilter = '-comments.length';
			}
		}

		function loadMore() {
			vm.feedPage++;
			vm.lastUpdated = 0;
			vm.updateFeed({append: true});
		}

		getStream();
		updateFeed();
	}
}());