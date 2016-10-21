class CreateStreamCtrl {
	constructor(streamService) {
		'ngInject';

		this.data = {
			name: '',
			description: ''
		};

		this._Stream = streamService;
	}

	create(isValid) {
		if (isValid) {
			this._Stream.create(this.data).then((response) => {
				alert('yay');
			},
				(err) => {
					alert('boo');
				}
			);
		}
	}
}

let createStream = {
	scope: {},
	controller: CreateStreamCtrl,
	templateUrl: './app/components/streams/create/create.stream.html'
};

export default createStream