class ProfileThreadsCtrl {
	constructor(Thread, User, $stateParams) {
		'ngInject';

		this._Thread = Thread;
		this._User = User;
		this._$stateParams = $stateParams;
		this._userId = $stateParams.userId;

		this.lastUpdated = 0;
		this.threadsSearch = '';
		this.threadPage = 0;
		this.getThreads();
	}

	getThreads(options) {
		options = options || {};
		options.timestamp = this.lastUpdated;
		options.filter = this.threadsSearch;
		options.page = this.threadPage;

		this._Thread.userThreads(this._userId, options).then((response) => {
			if (this.threadsSearch) {
				this.threads = [];
			}

			if (!options.append) {
				this.threads = response.data.res.records.concat(this.threads);
			} else {
				this.threads = this.threads.concat(response.data.res.records);
			}

			this.lastUpdated = Date.now();
			this.noMoreThreads = !response.data.res.morePages;
		});
	}
}

export default ProfileThreadsCtrl