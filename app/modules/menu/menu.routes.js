angular.module('angularRestaurant.menu').config(function($stateProvider) {
   $stateProvider.state('menu', {
     url: '/menu',
     views: {
       'header': {
         controller: 'HeaderController as header',
         templateUrl: 'modules/main/templates/header.html'
       },
       'content': {
         controller: 'MenuController as menu',
         templateUrl: 'modules/menu/templates/menu.html'
       },
       'footer': {
         controller: 'FooterController as footer',
         templateUrl: 'modules/main/templates/footer.html'
       }
     }
   });
 });
