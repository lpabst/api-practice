angular.module('myApp')
    .controller('mainCtrl', function($scope, myService){


$scope.searchMovie = function(movie_name){
  myService.searchMovie(movie_name).then(function(response){
    $scope.info = response.data.Search;
  });
}












});