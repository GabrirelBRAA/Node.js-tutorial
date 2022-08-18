let express = require('express');
let app = express();
require("dotenv").config()



app.use(function Meme3  (req, res, next){
    let method = req.method;
    let ip = req.ip;
    let path = req.path;
    console.log(method + " " + path + " - " + ip);
    next();

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


app.get("/",Meme)
app.get("/json", Meme2)






































 module.exports = app;
