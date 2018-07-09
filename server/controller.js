var model = require("./model.js");

module.exports = {
  get: function(req, res) {
    model.get(movies => res.send({ results: movies }));
  },

  post: function(req, res) {
    var movie = req.body;
    model.post(movie, () => res.send("movie added!"));
  }
};
