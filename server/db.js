var mysql = require("mysql");
var credentials = require("./config/dbCredentials.js");

module.exports = mysql.createConnection({
  user: credentials.USER,
  password: credentials.PASSWORD,
  database: "movies"
});
