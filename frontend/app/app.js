// Declare app level module which depends on views, and components
var $touristDesktop = angular.module('touristDesktop', [
  'ngRoute',
  'ngResource',
  'directives',
]);

$touristDesktop.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      title:       'Map view',
      template:    ' ',
      controller:  'PlacesCtrl',
    }).
    when('/places/:placeSlug', {
      title:       'Place',
      templateUrl: 'app/views/places/place.html',
      controller:  'PlaceCtrl'
    }).
    // when('/places/new', {
    //   controller:  'CreatePlaceCtrl',
    //   templateUrl: 'app/views/places/place.html'
    // }).
    otherwise({
      templateUrl: 'app/views/error.html'
    });
  // enable html5Mode for pushstate ('#'-less URLs)
  // $locationProvider.html5Mode(true);
}]);
