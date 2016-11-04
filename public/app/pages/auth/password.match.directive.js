function passwordMatch() {
	'ngInject';

	return {
		require: 'ngModel',
		scope: {
			otherModelValue: "=compareTo"
		},

		link: function (scope, element, attributes, ngModel) {
			ngModel.$validators.compareTo = function (modelValue) {
				return modelValue == scope.otherModelValue;
			};

			scope.$watch("otherModelValue", () => {
				ngModel.$validate();
			});
		}
	}
}

export default passwordMatch