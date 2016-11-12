class SingleThreadCtrl {
	constructor(Auth, Thread, $stateParams, $state, $mdDialog) {
		'ngInject';

		this._$stateParams = $stateParams;
		this.streamId = this._$stateParams.streamId;
		this._$state = $state;
		this._$dialog = $mdDialog;

		this._Thread = Thread;
		this._Auth = Auth;
		this._isLoggedIn = this._Auth.isLoggedIn();

		if (this._isLoggedIn) {
			this.currentUser = this._Auth.getUser()._id;
		}

		if (this._$state.current.name == 'app.singleStream') {
			this.thread.stream.moderators.forEach((moderator) => {
				if (this.currentUser == moderator) {
					this.moderator = true;
				}
			});
		}
	}

	toggleSave(item) {
		if (!item.saved) {
			this._Thread.save(item._id).then((response) => {
				angular.extend(item, response.data.res.record);
			});
		} else {
			this._Thread.unsave(item._id).then((response) => {
				angular.extend(item, response.data.res.record);
			});
		}
	}

	like(item) {
		console.log(item);
		this._Thread.like(item._id).then((response) => {
			angular.extend(item, response.data.res.record);
		});
	}

	unlike(item) {
		this._Thread.unlike(item._id).then((response) => {
			angular.extend(item, response.data.res.record);
		});
	}

	delete(item) {
		this._Thread.remove(item._id).then((response) => {
			this._$state.reload();
		});
	}

	openEditThread(item) {
		this._$dialog.show({
			templateUrl: './app/pages/threads/dialogs/edit/edit.html',
			controller: 'EditThreadDialogController',
			controllerAs: '$ctrl',
			clickOutsideToClose: true,
			locals: {
				item: item
			}
		});
	}

	openDeleteThread(item) {
		this._$dialog.show({
			templateUrl: './app/pages/threads/dialogs/delete/delete.html',
			controller: 'DeleteThreadDialogController',
			controllerAs: '$ctrl',
			clickOutsideToClose: true,
			locals: {
				item: item
			}
		});
	}
}


let singleThread = {
	scope: {},
	bindings: {
		thread: '<'
	},
	controller: SingleThreadCtrl,
	templateUrl: './app/components/forum/threads/single/threads.single.component.html'
};

export default singleThread