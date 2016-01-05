'use strict';

describe('Controller: CompletionsCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanTutorialApp'));

  var CompletionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompletionsCtrl = $controller('CompletionsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
    
    it('should count the total value of all completions', function(){
        scope.completes = [{ pomos: 5 }];
        expect(scope.countCompletions()).toEqual(5);
    });
  }));
});
