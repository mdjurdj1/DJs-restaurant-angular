angular.module('angularRestaurant.home').config(function($stateProvider) {
   $stateProvider.state('home', {
     url: '/home',
     views: {
       'content': {
         controller: 'HomeController as home',
         templateUrl: 'modules/home/templates/home.html'
       },
       'footer': {
         controller: 'FooterController as footer',
         templateUrl: 'modules/main/templates/footer.html'
       }
     }
   });
 });
