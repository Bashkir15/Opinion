class CreateThreadController {
	constructor(threadService, $mdToast, $stateParams) {
		'ngInject';

		this._Thread = threadService;
		this._$toast = $mdToast;
		this.data = {
			title: '',
			content: '',
			stream: $stateParams.streamId
		};
	}

	create(isValid) {
		if (isValid) {
			this._Thread.create(this.data).then((response) => {
				alert('yay');
			}, (err) => {
				alert('awww');
			});
		}
	}
}

let createThread = {
	scope: {},
	controller: CreateThreadController,
	templateUrl: './app/components/threads/create/create.html'
};

export default createThread