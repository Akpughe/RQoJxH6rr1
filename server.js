const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require('./config.js')
const app = express();

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => res.send("API Running..."));

const routes = require("./routes.js")(app)



const server = app.listen(3000, function () {
  console.log("Listening on port %s", server.address().port);
});
