import angular from 'angular'
import streamsList from './list/streams.list.component'
import singleStream from './single/streams.single.component'
import createStream from './create/stream.create.component'

let streamComponents = angular.module('streams.components', []);
streamComponents.component('streamsList', streamsList);
streamComponents.component('singleStream', singleStream);
streamComponents.component('createStream', createStream);

export default streamComponents