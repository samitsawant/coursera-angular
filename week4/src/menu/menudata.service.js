(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function() {
    console.log("getAllCategories Called");

    return $http({
        method:"GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      }).then(
      function(result) {
        var outPut = [];
        var categoryItems = result.data  ;
        for(var i = 0; i < categoryItems.length; i++) {

            outPut.push(categoryItems[i]);

        }
        console.log(outPut);
        return outPut;
      }
    )
  };

  service.getItemsForCategory = function(categoryShortName) {
    return $http({
        method:"GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json?category="  + categoryShortName
      }).then(
      function(result) {
        var outPut = [];
        var categoryItems = result.data.menu_items  ;
        for(var i = 0; i < categoryItems.length; i++) {

            outPut.push(categoryItems[i]);

        }
        console.log(outPut);
        return outPut;
      }
    )
  };
}

})();
