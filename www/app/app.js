
import config from './config';
import run from './run';
import controllers from './controllers';
import services from './services';
import factories from './factories';


var mod = angular.module('woorkout', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
    run($ionicPlatform);
})
.config(function($stateProvider, $urlRouterProvider) {
    config($stateProvider, $urlRouterProvider);
});

factories(mod);
controllers(mod);