const express = require("express");
const route = express.Router();
const teacherController = require("../controllers/teacherController.js")
route.get("/info" , teacherController.teacherInfo )
route.get("/department" , teacherController.teacherDepartment)
route.get("/salary" , teacherController.teacherSalary )
module.exports = route;