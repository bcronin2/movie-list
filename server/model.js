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
  get: function(callback) {
    var getAllMovies = "SELECT * FROM collection";
    dbQuery(getAllMovies, callback);
  },
  post: function(movie, callback) {
    var addMovie = `INSERT INTO collection
      (title, year, rating, poster, watched)
      VALUES("${movie.title}", ${movie.year},
      ${movie.rating}, "${movie.poster}", ${movie.watched})`;
    dbQuery(addMovie, callback);
  },
  put: function(movie, callback) {
    var updateMovie = `UPDATE collection
      SET watched = ${movie.watched}
      WHERE collection.title = "${movie.title}"
      AND collection.year = ${movie.year}
      AND collection.poster = "${movie.poster}"`;
    console.log(updateMovie);
    dbQuery(updateMovie, callback);
  }
};
