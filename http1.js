const http=require("http");


const list=function(req,res){
  console.log("server is processing your request");
  res.writeHead(200);
  res.end("first http1 server");
}

const simpleServer= http.createServer(list);
simpleServer.listen(8080);
