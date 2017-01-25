import angular from 'angular'
import "./streams/streams.components"
import './threads/threads.components'
import './comments/comments.components'

const requires = [
	'streams.components',
	'threads.components',
	'comments.components'
];

let forumComponents = angular.module('forum.components', requires);

export default forumComponents