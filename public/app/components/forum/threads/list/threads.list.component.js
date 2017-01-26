class threadListController {
	constructor($stateParams, $mdDialog, $rootScope, $state) {
		'ngInject';

		this._$stateParams = $stateParams;
		this._$dialog = $mdDialog;
		this._$rootScope = $rootScope;
		this._$state = $state;

		if (this._$state.current.name == 'app.home' || this._$state.current.name == 'app.profile.threads' || this._$state.current.name == 'app.profile.saved') {
			this.hideCreate = true;
			this.hideSidebar = true;
		}

		if (this._$state.current.name == 'app.home') {
			this.hideNoItems = true;
		}

		this.streamId = $stateParams.streamId;
		this.$postLink = this.postLink;


		$rootScope.$on('threadByScore', () => {
			if (this.rowFilter == '-score') {
				this.rowFilter = 'score';
			} else {
				this.rowFilter = '-score';
			}
		});

		$rootScope.$on('threadBySaves', () => {
			if (this.rowFilter == '-saves.length') {
				this.rowFilter = 'saves.length';
			} else {
				this.rowFilter = '-saves.length';
			}
		});

		$rootScope.$on('threadByDate', () => {
			if (this.rowFilter == '-created') {
				this.rowFilter = 'created';
			} else {
				this.rowFilter = '-created';
			}
		});

		$rootScope.$on('threadByComments', () => {
			if (this.rowFilter == '-comments.length') {
				this.rowFilter = 'comments.length';
			} else {
				this.rowFilter = '-comments.length';
			}
		});
	}

	postLink() {
		console.log(this.threads);
		console.log(this.stream);
	}


	openCreateThread() {
		this._$dialog.show({
			templateUrl: './app/pages/threads/dialogs/create/create.html',
			controller: 'ThreadsCreateController',
			controllerAs: '$ctrl',
			clickOutsideToClose: true
		});
	}
}


let threadsList = {
	transclude: true,
	bindings: {
		threads: '<'
	},
	controller: threadListController,
	templateUrl: './app/components/forum/threads/list/threads.list.component.html'
};

export default threadsList