var model = require("./model.js");

module.exports = {
  get: function(req, res) {
    model.get(movies => res.send({ results: movies }));
  },
  post: function(req, res) {
    var movie = req.body;
    model.post(movie, results => res.send("movie added!"));
  },
  put: function(req, res) {
    var movie = req.body;
    console.log(movie);
    model.put(movie, results => res.send("movie updated!"));
  }
};
