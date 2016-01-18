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
    var localStoreCompletes = localStorageService.get('completes') || [];
    
    // both unpurchased and purchased have their own array in local storage
    var localStoreUnpurchased = localStorageService.get('unpurchased') || [];
    
    var localStorePurchased = localStorageService.get('purchased') || [];
    
    $scope.completes = localStoreCompletes || [];
    $scope.unpurchased = localStoreUnpurchased || [];
    $scope.purchased = localStorePurchased || [];
    
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
            spent += el.cost;
        });
        
        return spent;
    };
    
    $scope.addUnpurchased = function(){
        if ($scope.reward.name){
            // fix cases where cost may not work
            if (!$scope.reward.cost || $scope.reward.cost < 0){
                $scope.reward.cost = 0;
            }
            
            if (!$scope.reward.url){
                $scope.reward.url = '#/rewards';
            }
            
            $scope.unpurchased.push($scope.reward);
            
            $scope.reward = {};
        }
        
    };
    
    // remove unpurchased reward without passing it to purchased
    $scope.removeUnpurchased = function(index){
        $scope.unpurchased.splice(index, 1);
    };
    
    // remove purchased reward (will change point count)
    $scope.removePurchased = function(index){
        $scope.purchased.splice(index, 1);
        $scope.spent = $scope.countSpent();
    };
    
    // 'purchase' a reward by sending it to the purchased array
    $scope.purchaseUnpurchased = function(index){
        if ($scope.count - $scope.spent > $scope.unpurchased[index].cost){
        
            var reward = $scope.unpurchased.splice(index, 1)[0];
        
            $scope.purchased.push(reward);
            
            // update counts
            $scope.count = $scope.countCompletions();
            $scope.spent = $scope.countSpent();
        }
        else{
            // add in a failure animation here
            console.log('fail');
        }
    };
    
    // watchers for purch & unpurch arrays
    $scope.$watch('unpurchased', function(){
      localStorageService.set('unpurchased', $scope.unpurchased);
    }, true);
    
    $scope.$watch('purchased', function(){
      localStorageService.set('purchased', $scope.purchased);
    }, true);
    
    $scope.count = $scope.countCompletions();
    $scope.spent = $scope.countSpent();
  });
