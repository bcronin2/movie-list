import httpRequest from "./httpRequest.js";
import "../../config/IMDB.js";

export default {
  endpoint: `https://api.themoviedb.org/3/search/movie?api_key=${
    window.IMDB_API_KEY
  }`,
  search: function(title, callback) {
    if (title) {
      httpRequest.get(`${this.endpoint}&query=${title}`, callback);
    } else {
      callback([]);
    }
  }
};
