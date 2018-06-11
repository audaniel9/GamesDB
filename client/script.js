var gamesApp = angular.module("gamesApp", ["ngRoute"]);

gamesApp.config(function($routeProvider) {
  $routeProvider.when("/", {
    controller: "GamesController",
    templateUrl: "games.html"
  })
  .when("/games", {
    controller: "GamesController",
    templateUrl: "games.html"
  })
  .when("/games/details/:id", {
    controller: "GamesController",
    templateUrl: "game_details.html"
  })
  .when("/games/add", {
    controller: "GamesController",
    templateUrl: "add_game.html"
  })
  .when("/games/edit/:id", {
    controller: "GamesController",
    templateUrl: "edit_game.html"
  })
  .otherwise({
    redirectTo: "/"
  });
});
