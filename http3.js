const http=require("http");

const response={
  message: "This is json format"
}
const list=function(req,res){
  console.log("server is processing your request");
  //res.setHeader("Content-Type","application/json");
  res.setHeader("Content-Type","text/csv");
  res.setHeader("Content-Disposition","attachment;fileName=CSV1.csv");
  res.writeHead(200);
  res.end('name,roll number,school\n Waseem,23,HPS');
}

const simpleServer= http.createServer(list);
simpleServer.listen(8082);