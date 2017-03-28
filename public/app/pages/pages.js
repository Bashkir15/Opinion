import angular from 'angular'
import './home/home'
import './auth/auth'
import './streams/streams'
import './threads/threads'
import './chats/chats'
import './profile/profile'

const requires = [
	'auth',
	'streams',
	'threads',
	'chats',
	'home',
	'profile'
];

let pagesModule = angular.module('app.pages', requires);

export default pagesModule