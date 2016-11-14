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
}

export default chatsConfig