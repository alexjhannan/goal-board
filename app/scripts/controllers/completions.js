'use strict';

/**
 * @ngdoc function
 * @name yeomanTutorialApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanTutorialApp
 */
angular.module('yeomanTutorialApp')
  .controller('CompletionsCtrl', function ($scope, localStorageService) {
    $scope.thing = 'this is the completions page';

    // retrieve locally stored completes
    var localStoreCompletes = localStorageService.get('completes');
    
    $scope.completes = localStoreCompletes || [];
    
    // watch completes, update on any changes
    $scope.$watch('completes', function(){
      localStorageService.set('completes', $scope.completes);
    }, true);
    
    $scope.removeComplete = function(index){
        $scope.completes.splice(index, 1);
        $scope.countCompletions();
    };
    
    $scope.countCompletions = function(){
        var count = 0;
        $scope.completes.forEach(function(el){
            count += el.pomos;
        });
        
        $scope.count = count;
    };
    
    $scope.countCompletions();
    
  });
