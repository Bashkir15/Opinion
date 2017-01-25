class activityCtrl {
	constructor(User, $stateParams) {
		'ngInject'

		this._User = User;
		this._$stateParams = $stateParams;
		this.userId = this._$stateParams.userId;
		this.activities = [];
		this.lastUpdated = 0;
		this.newActivitiesCount = 0;
		this.getActivities();
	}

	getActivities() {
		this._User.activity(this.userId).then((response) => {
			this.activities = response.data.res.records;
		});
	}
}

export default activityCtrl