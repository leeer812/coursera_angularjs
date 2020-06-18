(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = '';
  $scope.message = '';
  $scope.customStyle = {};

  function changeTextColor(color) {
    $scope.customStyle.textColor = color;
  };

  function changeBorderColor(color) {
    $scope.customStyle.borderColor = color;
  }

  $scope.checkDishes = function() {
    // Less than or equal to 3 dishes: display enjoy
    let dishes = $scope.dishes.split(',');
    let dishNum = dishes.length;
    for(let i = 0; i < dishes.length; i++) {
      if (dishes[i] == "") dishNum -= 1;
    }
    console.log(dishes);
    console.log(dishNum);
    if (dishNum == 0) {
      $scope.message = 'Please enter data first';
      changeTextColor('red');
      changeBorderColor('red-border');
    } else if (dishNum <= 3) {
      $scope.message = 'Enjoy!';
      changeTextColor('green');
      changeBorderColor('green-border');
    } else {
    // More than 3 dishes: display too much
      $scope.message = 'Too much!';
      changeTextColor('green');
      changeBorderColor('green-border');
    }
  };
}

})();
