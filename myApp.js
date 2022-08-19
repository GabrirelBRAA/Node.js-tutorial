let express = require('express');
const { userPassedConsoleChallenge } = require('fcc-express-bground/globals');
let app = express();
require("dotenv").config()
var bodyParser = require("body-parser")



app.use(function rootLogger(req, res, next){
    let method = req.method;
    let ip = req.ip;
    let path = req.path;
    console.log(method + " " + path + " - " + ip);
    next();

})
app.use(bodyParser.urlencoded({extended: false}))

app.get("/now", function timeNow(req, res, next){
    req.time = new Date().toString()
    next()

}, function(req, res){
    res.json({"time":req.time})
})

app.get("/:word/echo", function echoWord(req, res){
    res.json({"echo":req.params.word})
})



let public_path = __dirname + "/public";
app.use("/public", express.static(public_path))

function Meme(req, res){
    let Abs_path = __dirname + "/views/index.html"
res.sendFile(Abs_path);
}
function Meme2(req, res){
     if (process.env.MESSAGE_STYLE == "uppercase"){
        res.json({"message" : "HELLO JSON"});
     } else {
        res.json({"message" : "Hello json"});
     }
}

function name(req, res){
    if (req.method=="GET"){
    var first = req.query["first"]
    var  lastname = req.query["last"]
} else if (req.method == "POST"){
    var first = req.body["first"]
    var  lastname = req.body["last"]
}
        res.json({"name":first + " " + lastname})
}

app.get("/name", name)
app.post("/name", name)
app.get("/",Meme)
app.get("/json", Meme2)






































 module.exports = app;
