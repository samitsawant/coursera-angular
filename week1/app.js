
(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.textVal = "";
  $scope.message = "initial message";
  $scope.emptyMessage = "";

  $scope.buttonEvent = function () {
    if ($scope.textVal == '') {
      $scope.message = "Please enter data first";
    } else {
        var foodList = $scope.textVal.split(',');
        var empty = false;
        var emptyCount = 0;
        for(var i = 0; i < foodList.length; i++) {
           if (foodList[i].trim() == '') {
             emptyCount++;
             empty = true;
           }
        }
        var actualCount = foodList.length - emptyCount;
        if (empty == true) {
          $scope.emptyMessage = "Not considering empty items.";
        } else {
          $scope.emptyMessage = "";
        }

        if (actualCount >=1 && actualCount <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }}


    };
  }
})();
