import angular from 'angular';
import login from './login/login.component';
import signup from './signup/signup.component';


let authComponents = angular.module('auth.components', []);
authComponents.component('signupForm', signup);
authComponents.component('loginForm', login);

export default authComponents