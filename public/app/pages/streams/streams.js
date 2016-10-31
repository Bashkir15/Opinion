import angular from 'angular'
import streamsConfig from './streams.config'
import streamsService from './streams.service'
import streamsList from './list/streams.list.controller'

let streamsModule = angular.module('streams', []);
streamsModule.config(streamsConfig);
streamsModule.service('Stream', streamsService);
streamsModule.controller('StreamsListCtrl', streamsList);

export default streamsModule