'use strict';

/**
 * @ngdoc function
 * @name yeomanTutorialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanTutorialApp
 */
angular.module('yeomanTutorialApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    
    
    // goals are stored locally, so pull that data
    var localStoreGoals = localStorageService.get('goals');
    
    // set the scope's goals to equal the stored goals, or an empty array
    $scope.goals = localStoreGoals || [];
    
    // watch the scope's goals for changes, and immediately update stored goals if triggered
    $scope.$watch('goals', function(){
      localStorageService.set('goals', $scope.goals);
    }, true);
    
    // so, locally store things by setting and getting via localStorageService. cool.
    // note: this is an injected dependency
    
    // push the current goal into the array, and reset current goal
    $scope.addGoal = function(){
      
      // if goal is truthy (not an empty string)
      if ($scope.goal){
        // build goal object
        var newGoal = {
            name: $scope.goal,
            pomos: 0
        };
        $scope.goals.push(newGoal);
        $scope.goal = '';
      }
      
    };
    
      // remove element from list
    $scope.completeGoal = function(index){
      $scope.goals.splice(index, 1);
    };
    
    //fxns to add and subtract pomos
    $scope.addPomo = function(index){
        $scope.goals[index].pomos++;
    };
    
    $scope.subtractPomo = function(index){
        if ($scope.goals[index].pomos > 0){
            $scope.goals[index].pomos--; 
        }
       
    };
  });
