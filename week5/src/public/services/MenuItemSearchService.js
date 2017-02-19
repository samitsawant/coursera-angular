(function () {
"use strict";

angular.module('public')
.service('MenuItemSearchService', MenuItemSearchService);


MenuItemSearchService.$inject = ['$http', 'ApiPath']
function MenuItemSearchService($http, ApiPath) {
  var service = this;

    service.getMenuItemDetail = function(searchTerm) {
      return $http({
        method:"GET",
        url: ApiPath + "/menu_items/" + searchTerm + ".json"
      }
    ).then(
      function(result) {

        return result.data;
      }
    )
  };
}

})();
