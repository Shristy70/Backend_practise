
// ==================================example of npm install================
// var http = require("http");
// let upercase = require("uppercase");
// http.createServer((req,res)=>{
//   res.write("welcome the new page  :  ");
//   res.write(upercase("i am cybrom student welcome toyou!!"));
//   res.end();
// }).listen(8080);




// var mycol = require("./mymodule");
// let fs = require("fs");
// =======================================rename file=====================
// fs.rename("ram.txt" , "seetaRam.txt",(err)=>{
//   if(err) throw err;
//   console.log("File Renamed");
// })
// ==================================add/update==========================================
// fs.writeFile("ram.txt" , "welcome Ram  === Bhopal ",(err)=>{
//   if(err) throw err;
//   console.log("file created");
// })
// ==================================file delete==================================
// fs.unlink("myfile.txt",(err)=>{
// if(err) throw err ;
// console.log("file deleted")
// });
//OPEN NEW FILE//
// fs.open("cybrom.txt", "w", (err, file) => {
//   if (err) throw err;
//   console.log("file created");
// });
// fs.open("cybrom.txt", "w", (err, file) => {
//   if (err) throw err;
//   console.log("readd file");
// });

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
