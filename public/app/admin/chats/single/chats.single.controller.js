(function() {
	'use strict';

	angular.module('opinionated.admin')
	.controller('ChatsSingleController', ChatsSingleController);

	/* @ngInject */
	function ChatsSingleController ($scope, $rootScope, $state, $stateParams, $timeout, $mdDialog, appAuth, appToast, appChats) {
		var vm = this;
		var chatId = $stateParams.chatId;
		vm.getChat = getChat;
		vm.sendMessage = sendMessage;
		vm.scrollToBottom = scrollToBottom;
		vm.user = appAuth.getUser();
		vm.chat = [];
		vm.obj = {
			message: ''
		};

		function getChat() {
			var singleChatData = appChats.single.get({chatId: chatId}, function() {
				vm.chat = [singleChatData.res.record];
				vm.messages = singleChatData.res.record.messages;
				scrollToBottom();
			});
		}

		function scrollToBottom() {
			$timeout(function() {
				var scroller = document.getElementById('scrollContainer');
				scroller.scrollTop = scroller.scrollHeight;
			}, 0, false);
		}

		function sendMessage (isValid) {
			if (isValid) {
				var message = vm.obj.message;
				vm.obj.message = '';
				appChats.single.message({
					message: message,
					creator: appAuth.getUser()._id,
					_id: chatId
				}, function (response) {
					vm.messages.push(response.res.record.messages[0]);
					scrollToBottom();
				});
			}
		}

		getChat();
	}
}());