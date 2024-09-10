const express = require("express");
const route = express.Router();

route.get("/studentinfo", (req, res) => {
  res.send("<h1>this is student info </h1>");
});
route.get("/StudentDepartmet", (req, res) => {
  res.send("<h1>this is student departmet</h1>");
});

route.get("/studentabout", (req, res) => {
  res.send("<h1>this is student about </h1>");
});

module.exports = route;
