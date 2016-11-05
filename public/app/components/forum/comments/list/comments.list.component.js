class commentsListCtrl {
	constructor($mdDialog, $rootScope) {
		'ngInject';
		this._$dialog = $mdDialog;
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