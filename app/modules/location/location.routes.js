angular.module('angularRestaurant.location').config(function($stateProvider) {
   $stateProvider.state('location', {
     url: '/location',
     views: {
       'header': {
         controller: 'HeaderController as header',
         templateUrl: 'modules/main/templates/header.html'
       },
       'content': {
         controller: 'LocationController as location',
         templateUrl: 'modules/location/templates/location.html'
       },
       'footer': {
         controller: 'FooterController as footer',
         templateUrl: 'modules/main/templates/footer.html'
       }
     }
   });
 });
