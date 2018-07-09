var db = require("./db.js");

var dbQuery = (queryString, callback) => {
  db.query(queryString, (err, results) => {
    if (err) {
      return err;
    } else {
      callback(results);
    }
  });
};

module.exports = {
  post: function(movie, callback) {
    var addMovie = `INSERT INTO collection
      (title, year, rating, poster, watched)
      VALUES("${movie.title}", ${movie.year},
      ${movie.rating}, "${movie.poster}", ${movie.watched})`;
    dbQuery(addMovie, callback);
  },
  get: function(callback) {
    var getAllMovies = "SELECT * FROM collection";
    dbQuery(getAllMovies, callback);
  },
  put: function(movie, callback) {
    var updateMovie = `UPDATE collection
      SET watched = ${movie.watched}
      WHERE id = ${movie.id}`;
    dbQuery(updateMovie, callback);
  },
  delete: function(movie, callback) {
    var deleteMovie = `DELETE from collection
      WHERE id = ${movie.id}`;
    dbQuery(deleteMovie, callback);
  }
};
