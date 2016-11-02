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

	toggleSave(item) {
		if (!item.saved) {
			this._Comment.save(item._id).then((response) => {
				angular.extend(item, response.data.res.record);
			});
		} else {
			this._Comment.unsave(item._id).then((response) => {
				angular.extend(item, response.data.res.record);
			});
		}
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