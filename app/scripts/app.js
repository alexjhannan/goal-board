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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
