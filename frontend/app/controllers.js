'use strict';

/* Controllers */

$touristDesktop.
  controller('PlacesCtrl', ['$scope', '$rootScope', '$location',
    function($scope, $rootScope, $location) {

    }]).
  controller('PlaceCtrl', ['$scope', '$rootScope', '$routeParams',
    function($scope, $rootScope, $routeParams) {
      console.log($scope.places);
      $scope.place = $scope.places.filter(function( place ) {
        return place.slug == $routeParams.placeSlug;
      })[0];
      console.log($scope.place.name);
    }]).
  controller('CreatePlaceCtrl', ['$scope', '$rootScope',
    function($scope, $rootScope) {
      $scope.place = {};
    }]);