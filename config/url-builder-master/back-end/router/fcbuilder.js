var fs=require("fs");
var mongoose=require('mongoose');
var routers=require("./router.config");

fs.writeFile("../../front-end/js/api.config.js","var apiconfig="+JSON.stringify(routers),{},function(err){
    if(err){
        throw err;
    }else{
        mongoose.connection.close(true,function(err){
            console.log("数据库关闭成功！！")
        });
    }
});