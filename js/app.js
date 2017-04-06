var app = angular.module('conference', [])
app.controller('searchCtrl', ['$scope', function($scope){
  $scope.conferences = []

  var temp_conf_object = {
    "name" : "Conf1",
    "desc" : "desc1",
    "venue" : "venue",
    "time" : "9:30",
    "image" : "link"
  }

  for (var i = 0; i < 9; i++) {
    $scope.conferences.push(temp_conf_object);
  }

}])
