class commentsListCtrl {
	constructor() {
		'ngInject';
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