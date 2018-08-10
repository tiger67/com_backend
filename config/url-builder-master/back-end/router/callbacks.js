/**
 * The MIT License
 * Copyright (c) 2017-2018
 *如：
 *app.[get|post|...]("./student/list",function(req,res){
 * api.student.$find(function(err,data){
 *  if(err){
 *     throw err;
 *  }else{
 *     callback(req,res,data)
 *  }
 * });
 *})
 *这里定义的就是上面的callback方法，这里会根据api.集合名.$find中的"$find"名字自动调用下面的
 *callbacks.find,同理如果是 api.集合名.$save,则调用callbacks.save
 *也可以自己自定义回调方法，然后在router.config.js中配置来调用。
 *可以查看router下的index.js文件,里面的代码item.callback ? item.callback(req,res,data) : CB[item.api.opname](req,res,data)
 *便是上面所说功能实现代码。如果自己定义了item.callback属性，则运行item.callback，否则根据名称自动选择这里的callback运行。
 */
var FAIL={flag:0};
var callbacks={
    find:function(req,res,data){
        if(data.length>0){
            res.jsonp({flag:1,data:data,method:"find"});
        }else{
            res.jsonp(FAIL);
        }
    },
    save:function(req,res,data) {
        if (data) {
            res.jsonp({flag:1,data:data,method:"save"});
        }else{
            res.jsonp(FAIL);
        }
    },
    update:function(req,res,data){
        if (data) {
            res.jsonp({flag:1,data:data,method:"update"});
        }else{
            res.jsonp(FAIL);
        }
    },
    remove:function(req,res,data){
        if(data.ok){
            res.jsonp({flag:1,msg:"删除了"+data.n+"条数据",method:"remove"});
        }else{
            res.jsonp({flag:0,msg:"删除数据失败"});
        }
    },findOne:function(req,res,data){
        if(data.length==1){
            res.jsonp({flag:1,data:data,method:"findOne"});
        }else{
            res.jsonp(FAIL);
        }
    }
}
module.exports=callbacks