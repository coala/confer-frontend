var app = angular.module('conference', [])
app.controller('searchCtrl', ['$scope', "$http", function($scope, $http){
  $scope.conferences = []


    var url = "http://conferback.coala.io/conferences/api/conferences/";
    url = "data.json";
    $http({
        method: "GET",
        url: url
    }).success(function(res){
        res = res.data;
        for (var i = 0; i < res.length; i++){
            $scope.conferences.push(res[i]);
        }
    });

  

}])
