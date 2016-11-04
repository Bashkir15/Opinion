class SingleThreadCtrl {
	constructor(Thread, $stateParams) {
		'ngInject';

		this._$stateParams = $stateParams;
		this.streamName = $stateParams.streamName;

		this._Thread = Thread
	}

	toggleSave(item) {
		if (!item.saved) {
			this._Thread.save(item._id).then((response) => {
				angular.extend(item, response.data.res.record);
			});
		} else {
			this._Thread.unsave(item._id).then((response) => {
				angular.extend(item, response.data.res.record);
			});
		}
	}

	like(item) {
		console.log(item);
		this._Thread.like(item._id).then((response) => {
			angular.extend(item, response.data.res.record);
		});
	}

	unlike(item) {
		this._Thread.unlike(item._id).then((response) => {
			angular.extend(item, response.data.res.record);
		});
	}
}


let singleThread = {
	scope: {},
	bindings: {
		thread: '='
	},
	controller: SingleThreadCtrl,
	templateUrl: './app/components/forum/threads/single/threads.single.component.html'
};

export default singleThread