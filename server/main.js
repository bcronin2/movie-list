var express = require("express");
var parser = require("body-parser");
// var router = require("./routes.js");

export default (app = express());

app.set("port", 3000);
app.use(parser.json());
// app.use("/movies", router);
app.use(express.static(`${__dirname}/../client`));

app.listen(app.get("port"));
console.log("Listening on", app.get("port"));
