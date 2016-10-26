import angular from 'angular';
import threadList from './list/threads.list.component';
import createThread from './create/threads.create.component';
import singleThread from './single/thread.single.component';

let threadComponent = angular.module('thread.components', []);
threadComponent.component('threadList', threadList);
threadComponent.component('threadCreate', createThread);
threadComponent.component('singleThread', singleThread);

export default threadComponent