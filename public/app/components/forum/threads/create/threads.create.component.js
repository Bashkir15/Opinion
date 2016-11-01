class threadCreateCtrl {
	constructor(Toast, Thread, $stateParams, $rootScope) {
		'ngInject';

		this._Toast = Toast;
		this._Thread = Thread;
		this._$rootScope = $rootScope;
		this._$stateParams = $stateParams;

		this.data = {
			title: '',
			content: '',
			stream: ''
		};
	}

	create(isValid) {
		if (isValid) {
			if (this._$stateParams.streamId) {
				this.data.stream = this._$stateParams.streamId;
			}

			this._Thread.create(this.data).then((response) => {
				this._Toast.success('You have just posted a new thread');
				this._$rootScope.$broadcast('threadCreated');
			});
		} else {
			this._Toast.error('Hmm.. your form is not valid');
		}
	}
}

let createThread = {
	scope: {},
	controller: threadCreateCtrl,
	templateUrl: './app/components/forum/threads/create/threads.create.component.html'
};

export default createThread