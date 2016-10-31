import angular from 'angular'

import './shared/shared.components'
import './auth/auth.components'

const requires = [
	'shared.components',
	'auth.components'
];

let componentModule = angular.module('app.components', requires);

export default componentModule