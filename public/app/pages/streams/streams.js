import angular from 'angular'
import streamsConfig from './streams.config'
import streamsService from './streams.service'
import streamsList from './list/streams.list.controller'
import streamsSingle from './single/streams.single.controller'

let streamsModule = angular.module('streams', []);
streamsModule.config(streamsConfig);
streamsModule.service('Stream', streamsService);
streamsModule.controller('StreamsListCtrl', streamsList);
streamsModule.controller('StreamsSingleCtrl', streamsSingle);

export default streamsModule