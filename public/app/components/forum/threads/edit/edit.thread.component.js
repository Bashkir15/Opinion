class editThreadCtrl {
	constructor(Thread, $mdDialog, $rootScope) {
		'ngInject';

		this._$dialog = $mdDialog;
		this._$rootScope = $rootScope;
		this._Thread = Thread;
	}

	edit(isValid) {
		if (isValid) {
			this.data = {
				title: this.thread.title,
				content: this.thread.content
			};

			if (this.thread.link) {
				this.data.link = this.thread.link;
			}

			this._Thread.modify(this.thread._id, this.data).then((response) => {
				this._$rootScope.$broadcast('threadEdited');
				this._$dialog.hide();
			});
		}
	}
}

let editThread = {
	scope: {},
	bindings: {
		thread: '='
	},
	controller: editThreadCtrl,
	templateUrl: './app/components/forum/threads/edit/edit.html'
};

export default editThread