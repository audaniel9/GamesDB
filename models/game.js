var mongoose = require("mongoose");

var gameSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  series:{
    type: String
  },
  developer:{
    type: String
  },
  publisher:{
    type: String
  },
  year:{
    type: Number
  },
  tags:{
    type: String
  }
});

var game = module.exports = mongoose.model("Game", gameSchema);

module.exports.getGame = function(callback, limit) {
  Game.find(callback).limit(limit);
}

module.exports.getGameById = function(id, callback) {
  Game.findById(id, callback);
}

module.exports.addGame = function(game, callback) {
  Game.create(game, callback);
}

module.exports.updateGame = function(id, game, options, callback) {
  var query = {_id: id};
      update = {
        name: Game.name,
        series: Game.series,
        developer: Game.developer,
        publisher: Game.publisher,
        year: Game.year,
        tags: Game.tags
      }
      Game.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeGame = function(id, callback) {
  var query = {_id: id};
  Game.remove(query, callback);
}
