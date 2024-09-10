const express =require("express");
const route = express.Router();
route.get("/teacherinfo",(req,res)=>{
    res.send("Teacher Info");
})
route.get("/teacherdepartment",(req,res)=>{
    res.send("Teacher department");
})
route.get("/teachersalary",(req,res)=>{
    res.send("Teacher salary");
})
module.exports = route;