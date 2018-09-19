var express = require("express");
var app = express();
//npm install body-parser - for app.post newFriends to Array friends!
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));


app.set("view engine", "ejs");

var friends = ["Andrew", "Peter", "Lina", "Daniel", "George"];

app.get("/", function(req, res){
   res.render("home"); 
});

app.post("/addfriend", function(req, res){
   var newFriend = req.body.newfriend;
   friends.push(newFriend);
   res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running!");
});
