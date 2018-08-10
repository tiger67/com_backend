var path=require('path');
var resolve =function (pathstr){
    return path.resolve(__dirname,pathstr);
}
module.exports={
    entry:resolve("./front-end/index.js"),
    output:{
        path:resolve("./front-end/build"),
        filename:"bundle.js"
    }
}
