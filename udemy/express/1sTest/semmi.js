var express = require("express");
var app = express();

// routes 

// root
app.get('/', function (req, res){
    res.send('Main page');
});

// hello
app.get('/Hello', function (req, res){
    console.log("jott egy keres") ;
    res.send('Hello World!');
});

// new product
app.get('/New', function (req, res){
    console.log("adding new product") ;
    res.send('request to add new product!');
});




console.log("server started on IP "+process.env.IP + " , and PORT " +process.env.PORT );
app.listen(process.env.PORT,process.env.IP);
