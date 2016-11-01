import angular from 'angular'
import threadsList from './list/threads.list.component'
import singleThread from './single/threads.single.component'

let threadComponents = angular.module('threads.components', []);
threadComponents.component('threadList', threadsList);
threadComponents.component('singleThread', singleThread);

export default threadComponents