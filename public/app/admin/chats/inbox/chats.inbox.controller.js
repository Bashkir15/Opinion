(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ChatsInboxController', ChatsInboxController);

	/* @ngInject */
	function ChatsInboxController ($scope, $rootScope, $state, $timeout, $mdDialog, appAuth, appToast, appChats) {
		var vm = this;
		var openChats = {};
		vm.chats = [];
		vm.actions = {};
		vm.updateBadges = updateBadges;
		vm.message = message;
		vm.updateChats = updateChats;
		vm.user = appAuth.getUser();

		function updateBadges() {
			var messageCount = 0;
			vm.chats.forEach(function (chat) {
				messageCount += chat.unread;
			});
		}

		function message (ev, profile, chatItem) {
			var criteria;

			if (chatItem) {
				chatItem.unread = 0;
				updateBadges();
				criteria = {chatId: chatItem._id};
			} else {
				criteria = {
					participants: [
						profile._id,
						appAuth.getUser()._id
					]
				}
			}

			var chat = new appChats.single(criteria);

			chat.$save(function (response) {
				var chatId = response.res.record._id;

				openChats[response.res.record._id] = response.res.record;

				$mdDialog.show({
					controller: [
						'$scope',
						'$mdDialog',
						function ($scope, $mdDialog) {
							updateBadges();

							$scope.messages = response.res.record.messages;
							$scope.chatId = chatId;
							$scope.firstTime = true;

							$scope.$on('chatMessage', function (e, data) {
								$scope.$apply(function() {
									$scope.messages.unshift(data.chatMessage);
								});
							});

							$scope.close = function() {
								$mdDialog.hide();
							};

							$scope.sendMessage = function (isValid) {
								if (isValid) {
									var message = $scope.message;
									$scope.message = '';
									appChats.single.message({
										message: message,
										creator: appAuth.getUser()._id,
										_id: $scope.chatId
									}, function (response) {
										$scope.messages.unshift(response.res.record.messages[0]);
									});
								}
							};
						}
					],
					templateUrl: '/app/admin/chats/dialogs/chat.dialog.tmpl.html',
					targetEvent: ev
				}).finally(function() {
					delete openChats[chatId];
				});
			});
		}

		function updateChats (options) {
			options = options || {};

			var chatsData = appChats.single.get({}, function() {
				if (options.reload) {
					vm.chats = [];
				}

				if (chatsData.res.records.length) {
					if (!options.append) {
						vm.chats = chatsData.res.records.concat(vm.chats);
					} else {
						vm.chats = vm.chats.concat(chatsData.res.records);
					}
				}

				updateBadges();

				vm.noMoreChats = !chatsData.res.morePages;
				vm.lastUpdated = Date.now();
			});
		}

		$scope.$on('chatMessage', function (e, data) {
			if (!openChats[data.chatId]) {
				vm.updateChats({reload: true});
			}
		});

		updateChats();
	}
}());