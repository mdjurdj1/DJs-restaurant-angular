angular.module('angularRestaurant.contact').config(function($stateProvider) {
   $stateProvider.state('contact', {
     url: '/contact',
     views: {
       'header': {
         controller: 'HeaderController as header',
         templateUrl: 'modules/main/templates/header.html'
       },
       'content': {
         controller: 'ContactController as contact',
         templateUrl: 'modules/contact/templates/contact.html'
       },
       'footer': {
         controller: 'FooterController as footer',
         templateUrl: 'modules/main/templates/footer.html'
       }
     }
   });
 });
