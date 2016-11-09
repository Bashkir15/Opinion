class ProfileThreadsCtrl {
	constructor(Thread, User, $stateParams, $timeout, $rootScope) {
		'ngInject';

		this._Thread = Thread;
		this._User = User;
		this._$stateParams = $stateParams;
		this._$rootScope = $rootScope;
		this._userId = $stateParams.userId;
		this._$timeout = $timeout;
		this.threads = [];

		this.lastUpdated = 0;
		this.threadPage = 0;
		this.getThreads();
	}

	getThreads(options) {
		options = options || {};
		options.timestamp = this.lastUpdated;
		options.page = this.threadPage;

		this._Thread.userThreads(this._userId, options).then((response) => {

			if (!options.append) {
				this.threads = response.data.res.records.concat(this.threads);
			} else {
				this.threads = this.threads.concat(response.data.res.records);
			}

			this.lastUpdated = Date.now();
			this.noMoreThreads = !response.data.res.morePages;
		});
	}

	loadMore() {
		this.threadPage++;
		this.lastUpdated = 0;
		this.getThreads({
			append: true
		});
	}

}

export default ProfileThreadsCtrl