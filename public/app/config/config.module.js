import angular from 'angular';
import JWT from './services/jwt.service.js';

let configModule = angular.module('app.config', []);
configModule.service('Storage', JWT);

export default configModule