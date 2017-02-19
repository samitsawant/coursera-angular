(function () {
"use strict";

angular.module('public')
.service('StorageService', StorageService);


StorageService.$inject = ['ApiPath']
function StorageService(ApiPath) {
  var service = this;

  service.user = {};

    service.storeUserDetails = function(user) {
      service.user = user;
    };

    service.getUserDetails = function() {
      return service.user;
    };
}

})();
