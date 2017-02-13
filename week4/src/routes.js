(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menu/templates/main-categories.template.html',
    controller: 'CategoriesController as cats',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{category}',
    templateUrl: 'src/menu/templates/main-items.template.html',
    controller: 'ItemsController as its',
    resolve: {
      itemcats: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.category);
      }]
    }
  });




}


})();
