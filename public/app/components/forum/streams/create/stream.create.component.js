class createStreamCtrl {
	constructor(Stream, Toast, $rootScope) {
		'ngInject';

		this._Stream = Stream;
		this._Toast = Toast;
		this._$rootScope = $rootScope;
		this.data = {
			name: '',
			description: ''
		};
	}

	create(isValid) {
		if (isValid) {
			this._Stream.create(this.data).then((response) => {
				this._Toast.success('You just created a Stream: ' + response.data.res.record.name);
				this._$rootScope.$broadcast('streamCreated');
			});
		} else {
			this._Toast.error('Hmm... Your form isn\'t valid');
		}
	}
}

let createStream = {
	scope: {},
	controller: createStreamCtrl,
	templateUrl: './app/components/forum/streams/create/stream.create.component.html'
};

export default createStream