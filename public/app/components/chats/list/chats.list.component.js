class chatsListCtrl {
	constructor($rootScope, $state) {
		'ngInject';

		this._$state = $state;
		this._$rootScope = $rootScope;

		this._$rootScope.$on('hideChats', () => {
			this.hideChats = true;
		});

		this._$rootScope.$on('showChats', () => {
			this.hideChats = false;
		});
	}
}

let listComponent = {
	scope: {},
	bindings: {
		chats: '<'
	},
	controller: chatsListCtrl,
	templateUrl: './app/components/chats/list/list.html'
};

export default listComponent