var app = angular.module('conference', [])
app.controller('searchCtrl', ['$scope', "$http", function($scope, $http){
  $scope.conferences = []


    var url = "http://conferback.coala.io/conferences/api/conferences/";
    
    $http({
        method: "GET",
        url: url
    }).success(function(res){
        for (var i = 0; i < res.length; i++){
            $scope.conferences.push(temp_conf_object);
        }
    });

  

}])
