const express = require("express");
var app = express();
var request = require("request");
var bodyParser = require('body-parser')
var base = ""
var to = "";
var amount = "";

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  // base = "USD";
  // to = "CAD";
  // request("https://api.exchangeratesapi.io/latest?base="+base,function(error,response,body){
  // if(!error){
  //     var results = JSON.parse(body);
  //     //res.send(body);
    
  //    //  var send = results; 
  //     console.log(results)
  //     var s1 = results["rates"];
  //     var s2 = s1["CAD"];

  //     var c1 = s1[to];
  //     console.log(s1);
  //     console.log(s2);

  //     console.log("Final conversoin:--")
  //     console.log(20*s2);
  //     // var s2 = s1[currency];
  //     // console.log(s2);
    
  //     // var to = results["rates"]["CAD"];
  //     // console.log(send);
  //     // console.log(to);
  //     // console.log(value);
        res.render("dis.ejs");  
  //   }
  // })

})

app.post("/",function(req,res){
  base = req.body.base;
  to = req.body.to;
  amount = req.body.amount;
  
  console.log(base);
  console.log(to);
  console.log(amount);


  request("https://api.exchangeratesapi.io/latest?base="+base,function(error,response,body){
  if(!error){
      var results = JSON.parse(body);
      //res.send(body);
    
     //  var send = results; 
      //text.toUpperCase();
      console.log(results);
      var s1 = results["rates"];
      var s2 = s1[to];

      var c1 = s1[to];
      console.log(s1);
      console.log(s2);

      console.log("Final conversoin:--");
      console.log(amount*s2 );
      // var s2 = s1[currency];
      // console.log(s2);
    
      // var to = results["rates"]["CAD"];
      // console.log(send);
      // console.log(to);
      // console.log(value);
     // res.render("dis.ejs"); 
     res.send("Final conversion is "+amount*s2) 
    }
  })
})

// 

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
