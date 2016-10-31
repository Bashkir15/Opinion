import angular from 'angular'
import "./streams/streams.components"

const requires = [
	'streams.components'
];

let forumComponents = angular.module('forum.components', requires);

export default forumComponents