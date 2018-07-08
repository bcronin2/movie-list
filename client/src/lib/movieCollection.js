import httpRequest from "./httpRequest.js";

export default {
  endpoint: "/movies",
  get: function(callback) {
    httpRequest.get(this.endpoint, callback);
  },
  post: function(movie, callback) {
    var movieObj = {
      title: movie.title,
      year: movie.release_date.split("-")[0],
      rating: movie.vote_average,
      poster: movie.poster_path || "default",
      watched: false
    };
    httpRequest.post(this.endpoint, movieObj, callback);
  }
};
