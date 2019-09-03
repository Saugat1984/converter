const express = require("express");
var app = express();
var request = require("request");

app.get("/",function(req,res){
  request("https://api.exchangeratesapi.io/latest",function(error,response,body){
  if(!error){
      res.send(body.rates);  
    }
});
        //res.send("it works");   
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
