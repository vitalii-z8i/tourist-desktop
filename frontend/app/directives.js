
angular.module('directives', []).directive('map', function() {
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
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
    
      // create map
      var map = new google.maps.Map(document.getElementById(attrs.id), map_options);
      
      // configure marker
      var marker_options = {
        map: map,
        position: center
      };
      
      // create marker
      var marker = new google.maps.Marker(marker_options);
      
      window.setTimeout(function(){                                        
        google.maps.event.trigger(map, 'resize');
      },100);  
      // google.maps.event.addListener(map, "click", function (event) {
      //   var latitude = event.latLng.lat();
      //   var longitude = event.latLng.lng();
      //   console.log( latitude + ', ' + longitude );
      // });

    }
  }
});