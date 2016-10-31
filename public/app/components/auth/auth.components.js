import angular from 'angular'
import signup from './signup/signup.component'
import login from './login/login.component'

let authComponents = angular.module('auth.components', []);
authComponents.component('signupForm', signup);
authComponents.component('loginForm', login);

export default authComponents