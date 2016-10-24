import angular from 'angular';
import nav from './nav/nav.component';

import './auth/auth.components';
import './streams/stream.components';
import './threads/thread.components';

const requires = [
	'auth.components',
	'stream.components',
	'thread.components'
];

let componentModule = angular.module('app.components', requires);
componentModule.component('appNav', nav);

export default componentModule

