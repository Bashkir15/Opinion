import angular from 'angular'
import signup from './signup/signup.component'

let authComponents = angular.module('auth.components', []);
authComponents.component('signupForm', signup);

export default authComponents