const express = require("express");
const route = express.Router();
const stuController = require("../controllers/studentController")

route.get("/info" , stuController.stuInfo)
route.get("/result" , stuController.stuResult)
route.get("/fees" , stuController.stuFees)
module.exports = route;