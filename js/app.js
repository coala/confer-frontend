var app = angular.module('conference', ['ngRoute'])

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/home', {
     template: '<home></home>'
    }).
    when('/conf/:conference', {
     template: '<conference></conference>'
   }).
   otherwise({
    redirectTo: '/home'
   });

 }]);

app.directive('conference', ['$routeParams', '$http', function ($routeParams, $http) {
     return {
         restrict: 'E',
         templateUrl: 'partials/tabs/conference.html',
         controller: function ($scope) {
           console.log($routeParams.conference);
           $scope.conferences = [];
           var url = "http://conferback.coala.io/conferences/api/conferences/";
           $http({
               method: "GET",
               url: url
           }).success(function(res){
               console.log(res);
               for (var i = 0; i < res.length; i++){
                   $scope.conferences.push(res[i]);
               }
               $scope.currentConf = $scope.conferences[$routeParams.conference]
           });


         }
     }
 }])

 app.directive('home', ['$http', '$location', '$routeParams', function ($http, $location, $routeParams) {
      return {
          restrict: 'E',
          templateUrl: 'partials/tabs/home.html',
          controller: function($scope){
            console.log("Reached!")
            $scope.conferences = []
            $scope.go = function ( path ) {
              path = path;
              $location.path( '/conf/' + path );
            };
            var url = "http://conferback.coala.io/conferences/api/conferences/";
            $http({
                method: "GET",
                url: url
            }).success(function(res){
                console.log(res);
                for (var i = 0; i < res.length; i++){
                    $scope.conferences.push(res[i]);
                }
            });
          },
          controllerAs: 'searchCtrl'
      }
  }])
