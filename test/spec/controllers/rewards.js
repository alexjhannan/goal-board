'use strict';

describe('Controller: RewardsCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanTutorialApp'));

  var RewardsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RewardsCtrl = $controller('RewardsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
