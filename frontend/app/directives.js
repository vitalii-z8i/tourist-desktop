angular.module('directives', []).
  directive('map', function($rootScope) {
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
        google.maps.event.addListener($rootScope.map, "click", function (event) {
          var latitude = event.latLng.lat();
          var longitude = event.latLng.lng();
          console.log( latitude + ', ' + longitude );
        });
      }
    }
  });