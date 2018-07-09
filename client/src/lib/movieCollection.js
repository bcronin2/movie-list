import httpRequest from "./httpRequest.js";

export default {
  endpoint: "/movies",
  post: function(movie, callback) {
    var movieObj = {
      title: movie.title,
      year: Number(movie.release_date.split("-")[0]),
      rating: movie.vote_average,
      poster: movie.poster_path || "default",
      watched: false
    };
    httpRequest.post(this.endpoint, movieObj, callback);
  },
  get: function(callback) {
    httpRequest.get(this.endpoint, callback);
  },
  put: function(movie, callback) {
    httpRequest.put(this.endpoint, movie, callback);
  },
  delete: function(movie, callback) {
    httpRequest.delete(this.endpoint, movie, callback);
  }
};
