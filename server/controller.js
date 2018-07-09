var model = require("./model.js");

module.exports = {
  post: function(req, res) {
    var movie = req.body;
    model.post(movie, results => res.send("movie added!"));
  },
  get: function(req, res) {
    model.get(movies => res.send({ results: movies }));
  },
  put: function(req, res) {
    var movie = req.body;
    model.put(movie, results => res.send("movie updated!"));
  },
  delete: function(req, res) {
    var movie = req.body;
    model.delete(movie, results => res.send("movie deleted!"));
  }
};
