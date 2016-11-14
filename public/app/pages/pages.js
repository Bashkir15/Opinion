import angular from 'angular'
import './home/home'
import './auth/auth'
import './streams/streams'
import './threads/threads'
import './chats/chats'
import './profile/profile'

const requires = [
	'home',
	'auth',
	'streams',
	'threads',
	'chats',
	'profile'
];

let pagesModule = angular.module('app.pages', requires);

export default pagesModule