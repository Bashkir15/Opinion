import angular from 'angular';
import threadConfig from './threads.config';
import threadService from './services/thread.service';

let threadsModule = angular.module('threads', []);
threadsModule.config(threadConfig);
threadsModule.service('threadService', threadService);

export default threadsModule