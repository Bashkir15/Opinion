import angular from 'angular';
import './home';
import './auth/auth';

const requires = [
	'home',
	'auth'
];

let pagesModule = angular.module("app.pages", requires);

export default pagesModule;