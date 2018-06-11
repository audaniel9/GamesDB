const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
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
  platform:{
    type: String
  },
  tags:{
    type: String
  }
});

const game = module.exports = mongoose.model("Game", gameSchema);

module.exports.getGame = (callback, limit) => {
  Game.find(callback).limit(limit);
}

module.exports.getGameById = (id, callback) => {
  Game.findById(id, callback);
}

module.exports.addGame = (game, callback) => {
  Game.create(game, callback);
}

module.exports.updateGame = (id, game, options, callback) => {
  var query = {_id: id};
      update = {
        name: game.name,
        series: game.series,
        developer: game.developer,
        publisher: game.publisher,
        year: game.year,
        platform: game.platform,
        tags: game.tags
      }
      Game.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeGame = (id, callback) => {
  var query = {_id: id};
  Game.remove(query, callback);
}
