class appController {
	constructor($rootScope, $mdDialog) {
		'ngInject';

		this._$rootScope = $rootScope;
		this._$dialog = $mdDialog;
	}
}

export default appController