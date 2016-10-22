import angular from 'angular';
import create from './create/stream.create.component';
import list from './list/streams.list.component';
import single from './single/stream.single.components';

let streamComponents = angular.module('stream.components', []);
streamComponents.component('createStream', create);
streamComponents.component('listStream', list);
streamComponents.component('singleStream', single);


export default streamComponents