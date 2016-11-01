import angular from 'angular'
import threadsList from './list/threads.list.component'
import singleThread from './single/threads.single.component'
import createThread from './create/threads.create.component'

let threadComponents = angular.module('threads.components', []);
threadComponents.component('threadList', threadsList);
threadComponents.component('singleThread', singleThread);
threadComponents.component('createThread', createThread);

export default threadComponents