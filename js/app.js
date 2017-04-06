var app = angular.module('conference', [])
app.controller('searchCtrl', ['$scope', function($scope){
  $scope.conferences = []

  var temp_conf_object = {
    "name" : "Conf1",
    "desc" : `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua.`,
    "venue" : "Here",
    "time" : "9:30",
    "image" : "http://placehold.it/250x200"
  }

  for (var i = 0; i < 9; i++) {
        $scope.conferences.push(temp_conf_object);
  }

}])
