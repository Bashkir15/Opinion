class ProfileThreadsCtrl {
	constructor(Thread, User, $stateParams, $timeout) {
		'ngInject';

		this._Thread = Thread;
		this._User = User;
		this._$stateParams = $stateParams;
		this._userId = $stateParams.userId;
		this._$timeout = $timeout;

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

	search(newValue, oldValue) {
		var threadsSearchTimeout;

		if (newValue != oldValue) {
			this.threads = [];
		}

		this._$timeout.cancel(threadsSearchTimeout);
		threadsSearchTimeout = this._$timeout(() => {
			if (!newValue) {
				if (this.threadsSearchEnabled) {
					this.lastUpdated = 0;
					this.getThreads();
				}
			} else {
				this.getThreads();
			}

			this.threadsSearchEnabled = this.threadsSearch !== '';
		}, 500)
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