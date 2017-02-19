(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['registereduser', 'ApiPath']
function MyinfoController(registereduser, ApiPath) {
  var $ctrl = this;
  $ctrl.showSign = true;

  if (Object.keys(registereduser).length == 0) {
    $ctrl.showSign = true;
  } else {
    $ctrl.showSign = false;
    $ctrl.user = registereduser;
    $ctrl.imageUrl = ApiPath + "/images/" + $ctrl.user.fav + ".jpg";
  }
}
})();
