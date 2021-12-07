var express = require("express");
var mongoose = require("mongoose");
var app = express();
var bodyParser = require('body-parser');
var port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://admin-Saransh:Albertdouglar@cluster0.yjbtm.mongodb.net/intern",{useNewUrlParser: true},{useUnifiedTopology: true});

var nameSchema = new mongoose.Schema({
    name: String
});
var User = mongoose.model("User", nameSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    var myData = new User({
        name: req.body.user_name
    });
    myData.save();
    res.redirect('/');
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});