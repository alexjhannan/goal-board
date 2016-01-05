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
  
  it('should add items to a list', function (){
    scope.goal = 1;
    scope.addGoal();
    expect(scope.goals.length).toBe(1);
  });
  
  it('should remove items from an array based on index', function(){
    scope.goal = 'this is a goal';
    scope.addGoal();
    scope.goal += '1';
    scope.addGoal();
    scope.completeGoal(1);
    expect(scope.goals).toEqual([{ name: 'this is a goal', pomos: 0 }]);
  });
  
  it('should increment current count by one based on index', function(){
     scope.goal = 'this is a goal';
     scope.addGoal();
     scope.addPomo(0);
     expect(scope.goals[0].pomos).toBe(1);
  });
  
  it('should decrement current count by one based on index', function(){
     scope.goal = 'this is a goal';
     scope.addGoal();
     scope.addPomo(0);
     scope.subtractPomo(0);
     expect(scope.goals[0].pomos).toBe(0);
  });
  
  it('should not decrease count below 0', function(){
     scope.goal = 'this is a goal';
     scope.addGoal();
     scope.subtractPomo(0);
     expect(scope.goals[0].pomos).toBe(0);
  });
});
