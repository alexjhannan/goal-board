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
    
    
    // todos are stored locally, so pull that data
    var localStoreTodos = localStorageService.get('todos');
    
    // set the scope's todos to equal the stored todos, or an empty array
    $scope.todos = localStoreTodos || [];
    
    // watch the scope's todos for changes, and immediately update stored todos if triggered
    $scope.$watch('todos', function(){
      localStorageService.set('todos', $scope.todos);
    }, true);
    
    // so, localStorageService 
    
    // push the current todo into the array, and reset current todo
    $scope.addTodo = function(){
      
      // if todo is truthy (not an empty string)
      if ($scope.todo){
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      }
      
    };
    
      // remove element from list
    $scope.removeTodo = function(index){
      $scope.todos.splice(index, 1);
    };
  });
