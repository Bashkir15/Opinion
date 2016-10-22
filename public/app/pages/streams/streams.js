import angular from 'angular';
import streamConfig from './streams.config';
import streamService from './services/streams.service';
import streamCreate from './create/stream.create.controller';
import streamList from './list/stream.list.controller';


let streamsModule = angular.module('streams', []);
streamsModule.config(streamConfig);
streamsModule.service('streamService', streamService);
streamsModule.controller('StreamCreateController', streamCreate);
streamsModule.controller('StreamListController', streamList);

export default streamsModule;