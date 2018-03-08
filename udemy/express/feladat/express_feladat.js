var express = require("express");
var app = express();

// routes 
// Visiting "/" should print "Hi there, welcome to my assignment!"
// ==============================================================
// Visiting "/speak/pig" should print "The pig says 'Oink'"
// Visiting "/speak/cow" should print "The cow says 'Moo'"
// Visiting "/speak/dog" should print "The dog says 'Woof Woof!'"
// ==============================================================
// Visiting "/repeat/hello/3" should print "hello hello hello"
// Visiting "/repeat/hello/5" should print "hello hello hello hello hello"
// Visiting "/repeat/blah/2"  should print "blah blah"

// If a user visits any other route, print:
// "Sorry, page not found...What are you doing with your life?"


// root
app.get('/', function (req, res){
    res.send('Hi there, welcome to my assignment!');
});

// mondja
app.get('/mondja/:allat', function (req, res){
    
    var sAllat = req.params.allat.toUpperCase();
    var sValasz="A "+ sAllat +" mondja, hogy ";
   
    if (sAllat==="MALAC"){
        sValasz+=" rof rof";
    } else if (sAllat==="KUTYA"){
        sValasz+=" vau vau";
    } else if (sAllat==="TEHEN"){
        sValasz+=" muu muu";
    } else { 
        sValasz+= " ???????????";
    }
    // console.log("sValasz " + sValasz) ;
    res.send(sValasz);
});

//ismetel
app.get('/ismetel/:mit/:szam', function (req, res){
    
    var iSzam=Number(req.params.szam);
    var sValasz="<p>";
    for (var i=0; i<iSzam; i++){
        sValasz+=  req.params.mit + "</p><p>";  
    }
    
    res.send(sValasz+"</p>");
});


// error 
app.get('*', function (req, res){
    res.send('Sorry, page not found...What are you doing with your life?');
});



console.log("server started on IP "+process.env.IP + " , and PORT " +process.env.PORT );
app.listen(process.env.PORT,process.env.IP);