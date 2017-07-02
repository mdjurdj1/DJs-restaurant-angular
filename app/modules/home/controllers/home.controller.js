angular.module('angularRestaurant.home').controller('HomeController',
  function ($location) {

    var vm = this;

    vm.currentPath = $location.path();

  });
