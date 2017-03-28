class commentsListCtrl {
	constructor($mdDialog, $state) {
		'ngInject';
		this._$dialog = $mdDialog;
		this._$state = $state;

		if (this._$state.current.name == 'app.profile.comments' || this._$state.current.name == 'app.profile.saved') {
			this.hideCreate = true;
		}
	}

	openCreateComment() {
		this._$dialog.show({
			templateUrl: './app/pages/threads/dialogs/create/create.comment.html',
			controller: 'CommentsCreateController',
			controllerAs: '$ctrl',
			clickOutsideToClose: true
		});
	}
}

let commmentsList = {
	scope: {},
	bindings: {
		comments: '<',
		isProfile: '<'
	},
	controller: commentsListCtrl,
	templateUrl: './app/components/forum/comments/list/comments.list.component.html'
};

export default commmentsList;