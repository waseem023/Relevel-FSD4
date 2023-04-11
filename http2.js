const http=require("http");

const response={
  message: "This is json format"
}
const list=function(req,res){
  console.log("server is processing your request");
  res.setHeader("Content-Type","application/json");
  res.writeHead(200);
  res.end(JSON.stringify(response));
}

const simpleServer= http.createServer(list);
simpleServer.listen(8081);