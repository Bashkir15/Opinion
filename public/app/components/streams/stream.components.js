import angular from 'angular';
import create from './create/stream.create.component';

let streamComponents = angular.module('stream.components', []);
streamComponents.component('createStream', create);


export default streamComponents