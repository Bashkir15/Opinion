import angular from 'angular';
import threadList from './list/threads.list.component';
import createThread from './create/threads.create.component';

let threadComponent = angular.module('thread.components', []);
threadComponent.component('threadList', threadList);
threadComponent.component('threadCreate', createThread);

export default threadComponent