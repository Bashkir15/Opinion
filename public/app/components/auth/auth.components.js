import angular from 'angular'
import signup from './signup/signup.component'
import login from './login/login.component'
import updateProfile from './updateProfile/profile.update.component'

let authComponents = angular.module('auth.components', []);
authComponents.component('signupForm', signup);
authComponents.component('loginForm', login);
authComponents.component('updateProfile', updateProfile);

export default authComponents