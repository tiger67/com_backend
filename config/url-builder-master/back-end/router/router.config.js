/**
 * The MIT License
 * Copyright (c) 2017-2018
 *
 * 本文件生成 访问router配置数组文件（可运行test/router.js在控制台打印），格式如下：
 * [
 * { url: '/color/list',method: 'get',params: [],api: { [Function] opname: 'find' } },
 * { url: '/color/update',method: 'post',params: [ 'value', 'text', '_id' ],api: { [Function] opname: 'update' } },
 * { url: '/color/delete',method: 'post',params: [ '_id' ],api: { [Function] opname: 'remove' } },
 * { url: '/color/save',method: 'post',params: [ 'value', 'text' ],api: { [Function] opname: 'save' } }
 * ]
 */
var database_config= require("../../database.config");
var API=require("../api");
var database=database_config.database_conf;
var functions=database_config.public_op;
var database_list=Object.keys(database);
var routers=[];
var frontconfig=[];
database_list.forEach(function(name){
    var baseurl="/"+name+"/";
    functions.forEach(function(opfun){
        var params,url,method;
        var api=API[name]["$"+opfun]//=api.集合名.$方法名
        switch(opfun){
            case "find":
                method="get";
                url=baseurl+"list";
                params=[];
                break;
            case "save":
                method="post"
                url=baseurl+opfun;
                params=Object.keys(database[name].schemal);
                break;
            case "update":
                method="post"
                url=baseurl+opfun;
                params=Object.keys(database[name].schemal);
                params.push("_id");
                break;
            case "remove":
                method="post"
                url=baseurl+"delete";
                params=["_id"];
                break;
        }
        routers.push({url:url,method:method,params:params,api:api});
    })
})
module.exports=routers;