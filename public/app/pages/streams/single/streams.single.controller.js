class singleStreamCtrl {
	constructor(Auth, Stream, Thread, $stateParams, $mdDialog, $rootScope, $timeout, Upload, Toast) {
		'ngInject';

		this._Stream = Stream;
		this._Thread = Thread;
		this._Auth = Auth;
		this._isLoggedIn = this._Auth.isLoggedIn();
		this._$rootScope = $rootScope;
		this._$dialog = $mdDialog;
		this._$timeout = $timeout;
		this._Upload = Upload;
		this._Toast = Toast;
		this.streamId = $stateParams.streamId;
		this.threads = [];
		this.threadsSearch = '';
		this.threadPage = 0;
		this.lastUpdated = 0;
		this.getStream();
		this.getThreads();

		if (this._isLoggedIn) {
			this.currentUser = this._Auth.getUser()._id;
		}

		this._$rootScope.$on('threadCreated', () => {
			this._$dialog.hide();
			this.getThreads({
				append: true
			});
		});
	}

	getStream() {
		this._Stream.single(this.streamId).then((response) => {
			this.stream = response.data.res.record;

			this.stream.moderators.forEach((moderator) => {
				if (this.currentUser == moderator._id) {
					this.moderator = true;
					this._$rootScope.$broadcast('isModerator');
				}
			});
		});
	}

	getThreads(options) {
		options = options || {};
		options.filter = this.threadsSearch;
		options.timestamp = this.lastUpdated;
		options.page = this.threadPage;

		this._Thread.get(this.streamId, options).then((response) => {
			
			if (this.threadsSearch) {
				this.threads = [];
			}

			if (!options.append) {
				this.threads = response.data.res.records.concat(this.threads);
			} else {
				this.threads = this.threads.concat(response.data.res.records);
			}

			this.noMoreThreads = !response.data.res.morePages;
			this.lastUpdated = Date.now();
		});
	}

	uploadImage(file) {
		if (file) {
			this._Upload.upload({
				url: '/streams/uploadImage/' + this.streamId,
				file: file
			}).then((response) => {
				this._Toast.success('You have just uploaded an image for your stream');
			}, (evt) => {
				var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
				console.log(this.progressPercentage);
			});
		}
	}

	loadMore() {
		this.threadPage++;
		this.lastUpdated = 0;
		this.getThreads({
			append: true
		});
	}

	search(newValue, oldValue) {
		var threadsSearchTimeout;

		if (newValue !== oldValue) {
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
		}, 500);
	}

	byScore() {
		this._$rootScope.$broadcast('threadByScore');
	}

	byComments() {
		this._$rootScope.$broadcast('threadByComments');
	}

	bySaves() {
		this._$rootScope.$broadcast('threadBySaves');
	}

	byDate() {
		this._$rootScope.$broadcast('threadByDate');
	}
}

export default singleStreamCtrl