class overviewCtrl {
	constructor() {
		'ngInject'
	}
}

let overviewComponent = {
	scope: {},
	bindings: {
		user: '<'
	},
	controller: overviewCtrl,
	templateUrl: './app/components/profile/overview/profile.overview.component.html'
};

export default overviewComponent