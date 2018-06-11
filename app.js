var express = require("express"),
    app = express();
    bodyParser = require("body-parser");
    mongoose = require("mongoose");

app.use(bodyParser.json());

Game = require("./models/game");

mongoose.connect("mongodb://localhost/gamesdb");
var db = mongoose.connection;

app.get("/", function(req, res) {
  res.send("Use /games/");
});

app.get("/games", function(req, res) {
  Game.getGame(function(err, game) {
    if(err) throw err;
    res.json(game);
  });
});

app.post("/games", function(req, res) {
  var game = req.body;
  Game.addGame(game, function(err, game) {
    if(err) throw err;
    res.json(game);
  });
});

app.put("/games/:_id", function(req, res) {
  var id = req.params._id;
  var game = req.body;
  Game.updateGame(id, game, {}, function(err, game) {
    if(err) throw err;
    res.json(game);
  });
});

app.delete("/games/:_id", function(req, res) {
  var id = req.params._id;
  Game.removeGame(id, function(err, game) {
    if(err) throw err;
    res.json(game);
  });
});

app.listen(3000);
console.log("Listening on port 3000...");
