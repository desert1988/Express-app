var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "Meow",
        fish: "Glub",
        colt: "Don't cheet with JS!",
        rusty: "I'm rusty dog"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
   
    //long variant:
    
/*    var sound = "";
if(animal === "pig"){
        sound = "oink";
    } else if(animal === "cow"){
        sound = "moo";
    }
    */
    
    res.send("The " + animal + " says '" + sound + "'.");
});


app.get("/repeat/:message/:times", function(req, res) {
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    for(var i = 0; i < times; i++){
        result += message + " ";
    }
    res.send(result);
});

//all others in the end!
app.get("*", function(req, res){
   res.send("Sorry page not found. What are you doing with your life?");  
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!")
});