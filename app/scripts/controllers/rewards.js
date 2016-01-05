'use strict';

/**
 * @ngdoc function
 * @name yeomanTutorialApp.controller:RewardsctrlCtrl
 * @description
 * # RewardsctrlCtrl
 * Controller of the yeomanTutorialApp
 */
angular.module('yeomanTutorialApp')
  .controller('RewardsCtrl', function ($scope, localStorageService) {
    $scope.completes = localStorageService.get('completes') || [];
    
    // both rewards and purchased have their own array in local storage
    $scope.rewards = localStorageService.get('rewards') || [];
    
    $scope.purchased = localStorageService.get('purchased') || [];
    
    // should be refactored into a service...
    $scope.countCompletions = function(){
        var count = 0;
        $scope.completes.forEach(function(el){
            count += el.pomos;
        });
        
        return count;
    };
    
    $scope.countSpent = function(){
        var spent = 0;
        $scope.purchased.forEach(function(el){
            spent += el.pomos;
        });
        
        return spent;
    };
    
    $scope.count = $scope.countCompletions();
    $scope.spent = $scope.countSpent();
  });
