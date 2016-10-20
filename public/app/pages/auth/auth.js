import angular from 'angular';
import authConfig from './auth.config';
import authService from './services/auth.service';
import signupCtrl from './signup/signup.controller';
import loginCtrl from './login/login.controller';

let authModule = angular.module('auth', []);
authModule.config(authConfig);
authModule.service('authService', authService);
authModule.controller('signupCtrl', signupCtrl);
authModule.controller('loginCtrl', loginCtrl);

export default authModule