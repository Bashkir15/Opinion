import angular from 'angular'
import authConfig from './auth.config'
import authService from './auth.service'


let authModule = angular.module('auth', []);
authModule.config(authConfig);
authModule.service('Auth', authService);

export default authModule