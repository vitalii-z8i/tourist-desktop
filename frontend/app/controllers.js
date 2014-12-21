$touristDesktop.
  controller('PlacesCtrl', ['$scope', '$rootScope',
    function($scope, $rootScope) {
      $scope.places = [
        {name: 'Stevens mountain', coords: [49.34212527586522, 32.0635986328125], rating: 5},
        {name: 'Karier', coords: [49.1629610083917, 31.889190673828125], rating: 5}
      ];
      angular.forEach($scope.places, function(place,index){
        new google.maps.Marker({
          map: $rootScope.map,
          position: new google.maps.LatLng(place.coords[0], place.coords[1]),
          title:    place.name,
          icon:     'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=|6699FF',
        });
      })
    }]);