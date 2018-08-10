/**
 * The MIT License
 * Copyright (c) 2017-2018
 *
 *根据database.config.js配置文件，生成访问数据库的api
 *如：在database.config.js的"database_conf"中定义属性"student"，"student"便是mongodb中的集合（表），
 * "student"下的属性则为该集合的字段，运行本文件将会自动生成数据库访问方法(方法可根据配置文件中"public_op"定义)
 * #.student.$save
 * #.student.$update
 * #.student.$find
 * #.student.$remove
 */
var mongoose=require('mongoose');
var database= require("../../database.config");
var apimodel=require("./apimodel");
mongoose.connect(database.databaseurl);
var databaseArr=Object.keys(database.database_conf);
var slice=Array.prototype.slice;
var tostring=Object.prototype.toString;
var public_op=database.public_op;
databaseArr.forEach(function(collection){
    var docval=database.database_conf[collection];
    var schemal=new mongoose.Schema(docval.schemal||{});
    var Model= mongoose.model(collection,schemal);
    module.exports[collection]={};
    public_op && public_op.forEach(function(methodname){
        var fn=apimodel && apimodel[methodname];
        module.exports[collection]["$"+methodname]=function(){
            var argarr=slice.call(arguments)||[];
            var arg={Model:Model,callback:null,request:null,response:null};
            if(methodname ==="save" && typeof argarr[0]=="object"){
                var modelobj=argarr.shift();
                var instance =new Model(modelobj);
                arg.instance=instance;
            }
            if(typeof argarr[argarr.length-1] =="function"){
                arg.callback=argarr.pop();
            }
            if(tostring.call(argarr[argarr.length-1]) =="[object Array]"){
                 var httparr= argarr.pop();
                 arg.response=httparr[0]||null;
                 arg.request=httparr[1]||null;
            }
            arg.indexone=argarr[0]||null;
            arg.indextwo=argarr[1]||null;
            arg.indexthree=argarr[2]||null;
            arg.collection=collection;
            fn(arg);
        }
        module.exports[collection]["$"+methodname].opname=methodname;
    })
})



