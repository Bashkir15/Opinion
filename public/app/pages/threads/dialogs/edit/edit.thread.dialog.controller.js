class editThread {
	constructor(Thread, $mdDialog, item) {
		'ngInject';

		this._Thread = Thread;
		this._$dialog = $mdDialog;
		this._item = item;
		this.getThread
	}

	getThread() {
		this._Thread.single(this._item._id).then((response) => {
			this.thread = response.data.res.record;
		});
	}

	close() {
		this._$dialog.hide();
	}
}

export default editThread