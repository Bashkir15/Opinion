import angular from 'angular';
import nav from './nav/nav.component';

import './auth/auth.components';

const requires = [
	'auth.components'
];

let componentModule = angular.module('app.components', requires);
componentModule.component('appNav', nav);

export default componentModule

