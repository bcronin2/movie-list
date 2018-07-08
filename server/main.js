var express = require("express");
var parser = require("body-parser");
// var router = require("./routes.js");

var movies = [];

app = express();

app.set("port", 3000);
app.use(parser.json());
// app.use("/movies", router);
app.use(express.static(`${__dirname}/../client`));

app.listen(app.get("port"));
console.log("Listening on", app.get("port"));

app.get("/movies", (req, res) => res.send({ results: movies }));
app.post("/movies", (req, res) => {
  var movie = req.body;
  movies.push(movie);
  res.send("Movie added!");
});
