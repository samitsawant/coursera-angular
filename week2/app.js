(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  /* ToBuyController*/
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var Buy = this;

    Buy.buyItems = ShoppingListCheckOffService.getBuyItems();

    Buy.transferItem = function (itemIndex) {
      ShoppingListCheckOffService.transferItem(itemIndex);
    };
  }


  /* AlreadyBoughtController */
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var Bought = this;
    Bought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var boughtItems = [];
    var buyItems = [{
      name: "Cookies",
      quantity: 5
    },
    {
      name: "Apples",
      quantity: 12
    },
    {
      name: "Bananas",
      quantity: 6
    },
    {
      name: "Milk",
      quantity: 1
    },
    {
      name: "Butter",
      quantity: 1
    },
    {
      name: "Oats",
      quantity: 15
    }];

    service.getBuyItems = function() {
      return buyItems;
    };

    service.getBoughtItems = function() {
      return boughtItems;
    };

    service.transferItem = function(itemIndex) {
      var removedItem = buyItems[itemIndex];
      buyItems.splice(itemIndex, 1);
      boughtItems.push(removedItem);
    }
  }
})();
