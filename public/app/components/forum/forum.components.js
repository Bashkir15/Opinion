import angular from 'angular'
import "./streams/streams.components"
import './threads/threads.components'

const requires = [
	'streams.components',
	'threads.components'
];

let forumComponents = angular.module('forum.components', requires);

export default forumComponents