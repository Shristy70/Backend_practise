var http = require("http");
// var mycol = require("./mymodule");
let fs = require("fs");

//OPEN NEW FILE//
fs.open("cybrom.txt", "w", (err, file) => {
  if (err) throw err;
  console.log("file created");
});
fs.open("cybrom.txt", "w", (err, file) => {
  if (err) throw err;
  console.log("readd file");
});

// ====================create new file AND ADD DATA==================
// fs.appendFile("file.txt", "wlcome cybrom student := ", (err) => {
//   if (err) throw err;
//   console.log("file created");
// });

// fs.appendFile("file.txt", "learning full stack course", (err) => {
//   if (err) throw err;
//   console.log("now learning ......");
// });

// ======================add file in indexedDB.js=====================
// http.createServer((req, res) => {
//   fs.readFile("myfile.txt", (err, data) => {
//     res.write(data);
//     res.end();
//   });
// }).listen(8000);

// ===============create server=======================
// http.createServer(function(req,res){
//   res.writeHead(200 , {'Content-Type': 'text/html'});
//   res.write(" <br/> <h1>this is first page  </h1>");
//   res.write(mycol.myCollage());
//   res.write(mycol.myFees());
//   res.end();
// }).listen(9000)
