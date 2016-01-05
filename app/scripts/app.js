'use strict';

/**
 * @ngdoc overview
 * @name yeomanTutorialApp
 * @description
 * # yeomanTutorialApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanTutorialApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  // config local storage prefix so it doesn't read the wrong data
  .config(['localStorageServiceProvider', function (localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  // hash routes for frontend
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/completions', {
        templateUrl: 'views/completions.html',
        controller: 'CompletionsCtrl',
        controllerAs: 'completions'
      })
      .when('/rewards', {
          templateUrl: 'views/rewards.html',
          controller: 'RewardsCtrl',
          controllerAs: 'rewards'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
