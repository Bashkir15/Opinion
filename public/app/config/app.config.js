import angular from 'angular';
import JWT from './services/jwt.service.js';

let configModule = angular.module('app.config', []);
configModule.service('storage', JWT);

export default configModule