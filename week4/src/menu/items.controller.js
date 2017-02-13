(function () {
'use strict';
angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['itemcats', 'MenuDataService']
function ItemsController(itemcats, MenuDataService) {
  var its = this;
  console.log("In Items controller");
  console.log(itemcats[0]);

  its.itemlist = itemcats;
}


})();
