var mongoose = require("mongoose");

var bookSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  genre:{
    type: String,
    required: true
  },
  description:{
    type: String
  },
  author:{
    type: String,
    required: true
  },
  publisher:{
    type: String
  },

});

var Book = module.exports = mongoose.model("Book", bookSchema);

module.exports.getBooks = function(callback, limit) {
  Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id, callback) {
  Book.findById(id, callback);
}

module.exports.addBook = function(book, callback) {
  Book.create(book, callback);
}

module.exports.updateBook = function(id, book, options, callback) {
  var query = {_id: id};
      update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher
      }
      Book.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeBook = function(id, callback) {
  var query = {_id: id};
  Book.remove(query, callback);
}
