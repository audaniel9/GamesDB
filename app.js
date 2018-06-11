const express = require("express"),
      app = express();
      bodyParser = require("body-parser");
      mongoose = require("mongoose");

app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());

Game = require("./models/game");

mongoose.connect("mongodb://localhost/gamesdb");
var db = mongoose.connection;

app.get("/api/", (req, res) => {
  res.send("Use /api/games/");
});

app.get("/api/games", (req, res) => {
  Game.getGame((err, games) => {
    if(err) throw err;
    res.json(games);
  });
});

app.get("/api/games/:_id", (req, res) => {
  Game.getGameById(req.params._id, (err, game) => {
    if(err) throw err;
    res.json(game);
  });
});

app.post("/api/games", (req, res) => {
  var game = req.body;
  Game.addGame(game, (err, game) => {
    if(err) throw err;
    res.json(game);
  });
});

app.put("/api/games/:_id", (req, res) => {
  var game = req.body;
  Game.updateGame(req.params._id, game, {}, (err, game) => {
    if(err) throw err;
    res.json(game);
  });
});

app.delete("/api/games/:_id", (req, res) => {
  Game.removeGame(req.params._id, (err, game) => {
    if(err) throw err;
    res.json(game);
  });
});

app.listen(3000, "0.0.0.0");
console.log("Listening on port 3000...");
