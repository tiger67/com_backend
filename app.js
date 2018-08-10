const express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var routes = require("./routes/routes");
var app = express();
var multer = require("multer");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    //res.header("Content-Type", "text/html");
    next();
})
/*app.post("/login", function(req, res) {
    console.log(req.body);
    res.json({ code: 200, info: "you are success!!" })
})*/
routes(app);
app.listen(9000);