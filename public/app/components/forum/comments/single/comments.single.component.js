class commentsSingleCtrl {
	constructor() {
		'ngInject';
	}
}

let singleComment = {
	scope: {},
	bindings: {
		comment: '<'
	},
	controller: commentsSingleCtrl,
	templateUrl: './app/components/forum/comments/single/single.comment.component.html'
};

export default singleComment