class commentsListCtrl {
	constructor() {

	}
}

let commentsList = {
	scope: {},
	bindings: {
		comments: '='
	},
	templateUrl: './app/components/comments/list/list.html',
	controller: commentsListCtrl
};

export default commentsList