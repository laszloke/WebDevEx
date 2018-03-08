var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose")
    

    mongoose.connect('mongodb://localhost/test');
    
    const Cat = mongoose.model('Cat', { name: String });
    
    const kitty = new Cat({ name: 'Zildjian' });
    kitty.save().then(() => console.log('meow'));

    
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Simple mongo test app server started")
});