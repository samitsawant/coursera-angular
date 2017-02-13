(function () {
'use strict';
angular.module('MenuApp')
.component('itemsComponent', {
  templateUrl: 'src/menu/templates/items.template.html',
  bindings: {
    itemsc:'<'
  }
});

})();
