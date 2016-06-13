(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('StreamsSingleController', StreamsSingleController);

	/* @ngInject */
	function StreamsSingleController ($state, $stateParams, $scope, $mdDialog, $location, appAuth, appToast, appStreams, appThreads) {
		var vm = this;
		var streamId = $stateParams.streamId;
		vm.stream = [];
		vm.moderators = [];
		vm.feed = [];
		vm.getStream = getStream;
		vm.updateFeed = updateFeed;
		vm.openAddPost = openAddPost;
		vm.openDeleteStream = openDeleteStream;
		vm.editStream = editStream;
		vm.goToThread = goToThread;
		vm.upvote = upvote;
		vm.downvote = downvote;
		vm.save = save;
		vm.unsave = unsave;
		vm.orderByScore = orderByScore;
		vm.orderByDate = orderByDate;
		vm.orderBySaves = orderBySaves;
		vm.orderByReplies = orderByReplies;
		vm.feedPage = 0;
		vm.lastUpdated = 0;
		vm.feedFilter = '';

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

		function editStream() {
			$location.url('streams/edit/' + streamId);
		}

		function goToThread (item) {
			$location.url('streams/' + streamId + '/' + item._id);
		}

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
				});
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

		getStream();
		updateFeed();
	}
}());