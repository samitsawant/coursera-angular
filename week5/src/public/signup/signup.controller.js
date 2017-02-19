(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuItemSearchService', 'StorageService']
function SignupController(MenuItemSearchService, StorageService) {
  var $ctrl = this;
  $ctrl.menuerr = false;
  $ctrl.menusuccess = false;
  $ctrl.submit = function() {
    var menuItemDetail = "";
    MenuItemSearchService.getMenuItemDetail($ctrl.user.fav)
    .then(function(result) {
      menuItemDetail = result;
      $ctrl.user.favName = menuItemDetail.name;
      $ctrl.user.favDesc = menuItemDetail.description;

      StorageService.storeUserDetails($ctrl.user);
      $ctrl.menusuccess = true;
      $ctrl.menuerr=false;
    }).catch(function(err){
      $ctrl.menuerr=true;
      $ctrl.menusuccess = false;
    });
  }
}
})();
