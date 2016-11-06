class HomeCtrl {
	constructor(Thread, Auth) {
		'ngInject';

		this._Thread = Thread;
		this._Auth = Auth;
		this._isLoggedIn = this._Auth.isLoggedIn();
		this.getHome();
		this.threads = [];
		this.lastUpdated = 0;
		this.homeSearch = '';
		this.homePage = 0;
	}

	getHome(options) {
		options = options || {};
		options.timestamp = this.lastUpdated;
		options.filter = this.homeSearch;
		options.page = this.homePage;

		this._Thread.unHome(options).then((response) => {
			console.log(response);

			if (this.homeSearch) {
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

export default HomeCtrl