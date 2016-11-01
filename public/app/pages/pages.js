import angular from 'angular'
import './home/home'
import './auth/auth'
import './streams/streams'
import './threads/threads'

const requires = [
	'home',
	'auth',
	'streams',
	'threads'
];

let pagesModule = angular.module('app.pages', requires);

export default pagesModule