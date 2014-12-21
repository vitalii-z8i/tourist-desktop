// Declare app level module which depends on views, and components
var $touristDesktop = angular.module('touristDesktop', [
  'ngRoute',
  'ngResource',
  'directives',
]);

$touristDesktop.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/places', {
      controller:  'PlacesCtrl',
    }).
    when('/places/:id', {
      controller:  'PlaceCtrl',
      view:        'app/views/places/place.html'
    }).
    otherwise({
      templateUrl: 'app/views/error.html'
    });
  }]);