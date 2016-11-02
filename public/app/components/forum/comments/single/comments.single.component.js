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
	templateUrl: './app/components/forum/comments/single/comments.single.component.html'
};

export default singleComment