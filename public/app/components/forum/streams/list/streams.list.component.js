class ListStreamCtrl {
	constructor($mdDialog, $rootScope) {
		'ngInject';

		this._$dialog = $mdDialog;
		this._$rootScope = $rootScope;

		$rootScope.$on('streamByThreads', () => {
			if (this.rowFilter == '-threads.length') {
				this.rowFilter = 'threads.length';
			} else {
				this.rowFilter = '-threads.length';
			}
		});

		$rootScope.$on('streamBySubscribers', () => {
			if (this.rowFilter == 'subscribers.length') {
				this.rowFilter = 'subscribers.length';
			} else {
				this.rowFilter = '-subscribers.length';
			}
		});

		$rootScope.$on('streamByDate', () => {
			if (this.rowFilter == 'created') {
				this.rowFilter = '-created';
			} else {
				this.rowFilter = 'created';
			}
		});
	}

	openCreateStream() {
		this._$dialog.show({
			templateUrl: './app/pages/streams/dialogs/create.html'
		});
	}
}

let listStream = {
	scope: {},
	bindings:{
		streams: '='
	},
	controller: ListStreamCtrl,
	templateUrl: './app/components/forum/streams/list/streams.list.component.html'
};

export default listStream