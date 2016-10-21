import angular from 'angular';
import './home';
import './auth/auth';
import './streams/streams';

const requires = [
	'home',
	'auth',
	'streams'
];

let pagesModule = angular.module("app.pages", requires);

export default pagesModule;