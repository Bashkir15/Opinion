class overviewCtrl {
	constructor(User, $stateParams) {
		'ngInject'

		this._User = User;
		this._$stateParams = $stateParams;
		this.userId = $stateParams.userId;
		this.getUser();
	}

	getUser() {
		this._User.single(this.userId).then((response) => {
			this.user = response.data.res.record
		});
	}
}

let overviewComponent = {
	scope: {},
	controller: overviewCtrl,
	templateUrl: './app/components/profile/overview/profile.overview.component.html'
};

export default overviewComponent