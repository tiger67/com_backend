var express=require("express");
var bodyParser = require('body-parser')
var app=express();
var port =3000;
app.use(bodyParser());
//实现跨域
app.use("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    next();
})
//生成访问URL
require("./router")(app);
app.listen(port);