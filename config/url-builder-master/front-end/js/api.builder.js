var axios=require("axios");
var apiconfig=require("./api.config");
var BASEURL="http://localhost:3000";
var callbacks=function(success,fail){
    return function(response){
        var data=response.data;
        if (data.flag) {
           if(data.method!="find"){
               alert(data.method+"成功")
           }
            success&&success(response);
        } else {
            fail&&success(response);
            alert(data.method+"失败")
        }
    }
}
var api={};
if(apiconfig){
    var slice=Array.prototype.slice;
    apiconfig.forEach(function(u){
        api[u.url]=function(params){
            if(u.method=="post"){
                var data={};
                if(params){
                    u.params.forEach(function(param){
                        data[param]=params[param]||params[param]==0;
                    })
                }
                return new Promise(function(success,fail){
                     axios({
                        method: "post",
                        url: BASEURL+ u.url,
                        data: data
                    }).then(callbacks(success,fail))
                })

            }else if(u.method=="get"){
                var data="";
                if(params){
                    u.params.forEach(function(param,index){
                        if(index==0){
                            data="?"+param+"="+params[param]||params[param]==0
                        }
                    })
                }
                return new Promise(function(success,fail){
                    axios({
                        method: "get",
                        url:BASEURL+ u.url+encodeURI(data)
                    }).then(callbacks(success,fail))
                })
            }
        }
    })
}
console.log(api);
module.exports=api;