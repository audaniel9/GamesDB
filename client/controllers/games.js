var gamesApp = angular.module("gamesApp");

gamesApp.controller("GamesController", ["$scope", "$http", "$location", "$routeParams", function($scope, $http, $location, $routeParams) {
  $scope.getGames = function() {
    $http.get("/api/games").then(function(response) {
      $scope.games = response.data;
    });
  }

  $scope.getGame = function() {
    $http.get("/api/games/" + $routeParams.id).then(function(response) {
      $scope.game = response.data;
    });
  }

  $scope.addGame = function() {
    $http.post("/api/games/", $scope.game).then(function(response) {
      window.location.href="#!/games";
    });
  }

  $scope.updateGame = function() {
    $http.put("/api/games/" + $routeParams.id, $scope.game).then(function(response) {
      window.location.href="#!/games";
    });
  }

  $scope.removeGame = function(id) {
    $http.delete("/api/games/" + id).then(function(response) {
      window.location.href="#!/games";
    });
  }
}]);
