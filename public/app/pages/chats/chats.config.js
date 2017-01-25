function chatsConfig ($stateProvider) {
	'ngInject';

	$stateProvider.state('app.chats', {
		templateUrl: './app/pages/chats/chats.tmpl.html',
		abstract: true
	});

	$stateProvider.state('app.chats.inbox', {
		url: '/inbox',
		templateUrl: './app/pages/chats/inbox/inbox.html',
		controller: 'ChatsInboxController',
		controllerAs: '$ctrl'
	});

	$stateProvider.state('app.chats.inbox.messages', {
		url: '/:chatId/messages',
		templateUrl: './app/pages/chats/messages/messages.html',
		controller: 'ChatsMessagesController',
		controllerAs: '$ctrl'
	});

	$stateProvider.state('app.chats.saved', {
		url: '/saved',
		templateUrl: './app/pages/chats/saved/saved.html',
		controller: 'ChatsSavedController',
		controllerAs: '$ctrl'
	});

	$stateProvider.state('app.chats.saved.messages', {
		url: '/:chatId/messages',
		templateUrl: './app/pages/chats/messages/messages.html',
		controller: 'ChatsMessagesController',
		controllerAs: '$ctrl'
	});

	$stateProvider.state('app.chats.trash', {
		url: '/trash',
		templateUrl: './app/pages/chats/trash/trash.html',
		controller: 'ChatsTrashController',
		controllerAs: '$ctrl'
	});

	$stateProvider.state('app.chats.trash.messages', {
		url: '/:chatId/messages',
		templateUrl: './app/pages/chats/messages/messages.html',
		controller: 'ChatsMessagesController',
		controllerAs: '$ctrl'
	});

}

export default chatsConfig