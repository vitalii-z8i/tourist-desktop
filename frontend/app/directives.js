angular.module('directives', []).
  directive('map', function($rootScope, $location) {
    return {
      restrict: 'E',
      replace: true,
      template: '<div></div>',
      link: function($scope, element, attrs) {
        var center = new google.maps.LatLng(49.439110465761615, 32.06565856933594);
        var map_options = {
          zoom: 10,
          streetViewControl: false,
          disableDefaultUI: true,
          center: center,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        };

        $rootScope.map = new google.maps.Map(document.getElementById(attrs.id), map_options);

        window.setTimeout(function(){
          google.maps.event.trigger($rootScope.map, 'resize');
        },100);
        $scope.places = [
          {slug: 'stevens-mountain', name: 'Stevens mountain', coords: {lat: 49.34212527586522, lng: 32.0635986328125}, rating: 5},
          {slug: 'cherkago', name: 'Cherkago', coords: {lat: 49.438663968517226, lng: 32.06634521484375}, rating: 5},
          {slug: 'karier', name: 'Karier', coords: {lat: 49.1629610083917, lng: 31.889190673828125}, rating: 5}
        ];
        $scope.markers = []
        angular.forEach($scope.places, function(place,index){
          var marker = new google.maps.Marker({
            map:      $rootScope.map,
            position: new google.maps.LatLng(place.coords.lat, place.coords.lng),
            title:    place.name,
            icon:     'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=|6699FF',
            url:      '/places/'+ place.slug
          });
          $scope.markers.push(marker);
          google.maps.event.addListener(marker, "click", function() {
            $scope.$apply(function() {
              $rootScope.map.setZoom(10);
              $rootScope.map.setCenter(new google.maps.LatLng(place.coords.lat, place.coords.lng));

              var neBounds = $rootScope.map.getBounds().getNorthEast();
              var newLng = google.maps.geometry.spherical.interpolate(
                      new google.maps.LatLng(place.coords.lat,place.coords.lng),
                      new google.maps.LatLng(neBounds.lat(), neBounds.lng()),
                      0.5
                    ).lng();
              $rootScope.map.panTo(new google.maps.LatLng(place.coords.lat, newLng));
              $rootScope.map.setZoom(10);
              $location.path(marker.url);
            });
          });
        })

        google.maps.event.addListener($rootScope.map, "click", function (event) {
          var latitude = event.latLng.lat();
          var longitude = event.latLng.lng();
          console.log( latitude + ', ' + longitude );
        });
      }
    }
  });