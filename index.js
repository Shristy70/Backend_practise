 var http = require("http");
 var mycol = require("./mymodule");


http.createServer(function(req,res){
  res.writeHead(200 , {'Content-Type': 'text/html'});
  res.write(" <br/> <h1>this is first page  </h1>");
  res.write(mycol.myCollage());
  res.write(mycol.myFees());
  res.end();
}).listen(9000)
