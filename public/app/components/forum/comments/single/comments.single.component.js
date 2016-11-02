class commentsSingleCtrl {
	constructor(Comment) {
		'ngInject';

		this._Comment = Comment;
	}

	like(item) {
		this._Comment.like(item._id).then((response) => {
			angular.extend(item, response.data.res.record);
		});
	}

	dislike(item) {
		this._Comment.dislike(item._id).then((response) => {
			angular.extend(item, response.data.res.record);
		});
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