angular.module('angularRestaurant.location').controller('LocationController',
  function (NgMap) {

    var vm = this;

    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });

    vm.showCustomMarker= function(evt) {
        map.customMarkers.foo.setVisible(true);
        map.customMarkers.foo.setPosition(this.getPosition());
      };
      vm.closeCustomMarker= function(evt) {
        this.style.display = 'none';
      };

  });
