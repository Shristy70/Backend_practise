const express = require("express");
const app = express();
const studentRoute = require("./routes/studetRoute");
const teacherRoute = require("./routes/teacherRoute")
app.use("/teacher" , teacherRoute);
app.use("/student" , studentRoute);
app.listen(8000, (req, res) => {
  console.log("app is listing");
});
