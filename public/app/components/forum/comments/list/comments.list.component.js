class commentsListCtrl {
	constructor($mdDialog, $state) {
		'ngInject';
		this._$dialog = $mdDialog;
		this._$state = $state;

		if (this._$state.current.name = 'app.profile.comments' || this._$state.current.name == 'app.profile.saved') {
			this.hideCreate = true;
		}
	}

	openCreateComment() {
		this._$dialog.show({
			templateUrl: './app/pages/threads/dialogs/comment-create.html'
		});
	}
}

let commmentsList = {
	scope: {},
	bindings: {
		comments: '<'
	},
	controller: commentsListCtrl,
	templateUrl: './app/components/forum/comments/list/comments.list.component.html'
};

export default commmentsList;