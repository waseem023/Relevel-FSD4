const express=require("express");
const app=express();


app.get('/',(req,res)=>{
  res.send("express j server is in index");
});

app.get('/1',(req,res)=>{
  res.send("express j server is in 1");
});

app.get('/2',(req,res)=>{
  res.send("express j server is in 2");
});




app.listen(8001,function(){
  console.log("server is running");
});