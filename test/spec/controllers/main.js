'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanTutorialApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.todos.length).toBe(0);
  });
  
  it('should add items to a list', function (){
    scope.todo = 1;
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });
  
  it('should remove items from an array based on index', function(){
    scope.todos = ['1', '2', '3'];
    scope.removeTodo(1);
    expect(scope.todos).toEqual(['1', '3']);
  });
});
