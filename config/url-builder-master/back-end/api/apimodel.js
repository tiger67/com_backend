/**
 * The MIT License
 * Copyright (c) 2017-2018
 *
 *1，定义了数据库增删改查访问时，回调处理方式
 * 如:直接调用 #.student.$save({},function(data){})
 * 如果上面的回调function 如果没有写怎么处理？写了怎么处理？如果是在express 中的
 * app.[get|post|...](url,functon callback (request,response){
 *               #.student.$save({})
 * });又将怎么处理？
 *以上各种处理都在 cb中定义（注意这里已经自带了数据返回错误处理方式if (err) {throw err;}，所有的数据库错误都在这里处理）
 *
 *2，定义了数据库增删该查访时，真实的数据库调用的方法
 * 如：#.student.$save的时候本质上调用的是o.instance.save(),
 * 而o.instance则是根据配置文件生成的一个mongoose model实例，
 * o.model=mongoose model
 * o.instance=mongoose model instance
 *
 */
var func =require("../../database.config").public_op;
var cb = function (o) {
    return function (err, docs ,arg2) {
        if (err) {
            throw err;
        } else {
            if(o.name=="remove"){
                docs=docs.result;
            }
            if (o.callback && typeof o.callback == "function") {
                o.name=="save" ? o.callback(docs,arg2): o.callback(docs);
            } else if (o.response) {
                o.response && o.response.jsonp({msg: o.collection + "操作" + o.name + "成功", docs: data});
            } else {
                o.name=="save" ?  console.log(docs,arg2) : console.log(docs);
            }
        }
    }
}
func.forEach(function (name) {
    exports[name] = function (o) {
        o.name = name;
        if (o.Model) {
            switch (name) {
                case "save":
                    o.instance.save(cb(o));
                    break;
                case "remove":
                    o.Model.remove(o.indexone, cb(o))
                default:
                    o.Model[name](o.indexone, o.indextwo, o.indexthree, cb(o))
                    break;
            }
        }
    }
})


