class createThreadAnywhereCtrl {
	constructor($mdDialog, Thread, Stream, Toast) {
		'ngInject';

		this._$dialog = $mdDialog;
		this._Thread = Thread;
		this._Stream = Stream;
		this._Toast = Toast;
		this.getStreams();

		this.data = {
			title: '',
			content: '',
			link: '',
			stream: ''
		};
	}

	close() {
		this._$dialog.hide();
	}

	getStreams(options) {
		options = options || {};


		this._Stream.get(options).then((response) => {
			this.streams = response.data.res.records;
		});
	}

	create(isValid) {
		if (isValid) {
			this._Thread.create(this.data).then((response) => {
				if (response.data.success) {
					this._Toast.success('You have just created a thread: ' + response.data.res.record.title);
					this.close();
				} else {
					this._Toast.error(response.data.res.message);
				}
			});
		} else {
			this._Toast.error('There seems to be an error with your form');
		}
	}

	makeLink() {
		this.hasLink = !this.hasLink
	}
}

export default createThreadAnywhereCtrl