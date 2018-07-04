import "../config/IMDB.js";

export default {
  endpoint: `https://api.themoviedb.org/3/search/movie?api_key=${
    window.IMDB_API_KEY
  }`,
  search: function(title, callback) {
    window
      .fetch(`${this.endpoint}&query=${title}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(json => {
        callback(json ? json.results : []);
      });
  }
};
