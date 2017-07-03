angular.module('angularRestaurant.location').controller('LocationController',
  function (NgMap) {

    var vm = this;

    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });

    vm.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQz4jORqA6XDWFVuKKhPQegX2iHjQewy8"

    vm.showCustomMarker= function(evt) {
        map.customMarkers.foo.setVisible(true);
        map.customMarkers.foo.setPosition(this.getPosition());
      };
    vm.closeCustomMarker= function(evt) {
        this.style.display = 'none';
      };

  });
