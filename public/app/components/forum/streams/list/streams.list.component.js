class ListStreamCtrl {
	constructor($mdDialog) {
		'ngInject';

		this._$dialog = $mdDialog
	}

	openCreateStream() {
		this._$dialog.show({
			templateUrl: './app/pages/streams/dialogs/create.html'
		});
	}
}

let listStream = {
	scope: {},
	bindings:{
		streams: '='
	},
	controller: ListStreamCtrl,
	templateUrl: './app/components/forum/streams/list/streams.list.component.html'
};

export default listStream