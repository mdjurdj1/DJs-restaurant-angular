var app = angular.module('app', [
  'angularRestaurant.core',
  'angularRestaurant.home',
  'angularRestaurant.menu',
  'angularRestaurant.contact'
]);

angular.module('app').config(function ($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/home');
});
