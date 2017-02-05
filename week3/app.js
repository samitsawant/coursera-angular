(function(){
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);

  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;
    ctrl.textItem = "";
    ctrl.found = [];
    ctrl.somethingFound = true;

    ctrl.findItems = function(searchTerm) {
      if (searchTerm === "") {
        ctrl.somethingFound = false;
        ctrl.found = [];
      } else {
        MenuSearchService.getMatchedMenuItems(searchTerm).then(function(resultList) {
          if (resultList.length == 0) {
            ctrl.somethingFound = false;
          } else {
            ctrl.somethingFound = true;
          }
          ctrl.found = resultList;
        })
      }
    };

    ctrl.isNothingFound = function() {
      return (!ctrl.somethingFound);
    }

    ctrl.removeItem = function (index) {
      ctrl.found.splice(index, 1)
    };
  }

  MenuSearchService.$inject = ['$http']
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method:"GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }
    ).then(
      function(result) {
        var outPut = [];
        var menuItems = result.data.menu_items;
        for(var i = 0; i < menuItems.length; i++) {
          if (menuItems[i].description.toLowerCase().
          indexOf(searchTerm.toLowerCase()) !== -1) {
            outPut.push(menuItems[i]);
          }
        }
        return outPut;
      }
    )
  };
}

function FoundItems() {
  var ddo = {
    scope:{
      foundList: "<",
      onRemove: "&"
    },
    templateUrl : "foundItems.html",
    controller: MenuController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


function MenuController() {
  var list = this;

  list.isFull = function() {
    if (list.foundList.length == 0) {
      return false;
    }
    return true;
  };

  list.isClicked = function() {
    if (list.clicked && (!list.isFull())) {
      return true;
    }
    return false;
  };
}

})();
