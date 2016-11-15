import angular from 'angular'
import streamsConfig from './streams.config'
import streamsService from './streams.service'
import streamsList from './list/streams.list.controller'
import streamsSingle from './single/streams.single.controller'
import trendingStreams from './trending/trending.streams.controller'
import subscribedStreams from './subscribed/subscribed.streams.controller'
import streamsCreateCtrl from './dialogs/create/streams.create.controller'

let streamsModule = angular.module('streams', []);
streamsModule.config(streamsConfig);
streamsModule.service('Stream', streamsService);
streamsModule.controller('StreamsListCtrl', streamsList);
streamsModule.controller('StreamsSingleCtrl', streamsSingle);
streamsModule.controller('TrendingStreamsCtrl', trendingStreams);
streamsModule.controller('SubscribedStreamsCtrl', subscribedStreams);
streamsModule.controller('StreamsCreateController', streamsCreateCtrl);

export default streamsModule