import angular from 'angular'
import homeConfig from './home.config'
import homeCtrl from './home.controller'

let homeModule = angular.module('home', []);
homeModule.config(homeConfig);
homeModule.controller('HomeCtrl', homeCtrl);

export default homeModule