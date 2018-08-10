/**
 * The MIT License
 * Copyright (c) 2017-2018
 *
 * 通过router.config生成的url配置文件数组,然后自动构建真实URL访问。
 * 可在最下面console.log(app),把控制台滚动条拉倒最底，会看到数组stack存有一串callback,
 * 其中有三个callback是express 自带的 还有一个是app.use(bodyParser());
 * 其余的便是此文件生成的callback。
 */
var CB=require("./callbacks");
var routers=require("./router.config");
function builder(app){
    routers.forEach(function(item){
        app[item.method](item.url,function(req,res){
            if(item.method =="post"){
                var paramdata={};
                var body=req.body;
                item.params.forEach(function(param){
                    paramdata[param]=body[param];
                })
                if(item.api.opname=="update"){
                    item.api({_id:paramdata._id},paramdata,function(data){
                        item.callback ? item.callback(req,res,data) : CB[item.api.opname](req,res,data)
                    })
                }else{
                    item.api(paramdata,function(data){
                        item.callback ? item.callback(req,res,data) : CB[item.api.opname](req,res,data)
                    })
                }
            }else{
                var paramdata={};
                var query=req.query;//console.log(query);
                item.params&&item.params.forEach(function(param){
                    if(query[param]&&query[param]!=0){
                        paramdata[param]=query[param]
                    }
                })
                item.api(paramdata,function(data){
                    item.callback? item.callback(req,res,data) : CB[item.api.opname](req,res,data)
                })
            }
        })
    })
}
module.exports=builder;
