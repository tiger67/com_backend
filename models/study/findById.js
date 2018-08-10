var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/kuang").then(function(res) {
    //console.log(res)
});
var Schema = mongoose.Schema;
var blogSchame = new Schema({
    title: String,
    author: String,
    body: String,
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        faver: Number
    }
})

var Blog = mongoose.model("blog", blogSchame, "blog");


Blog.findOne().then((res) => {
    //console.log(res);
    Blog.findById(res._id).then((res) => {

    })
})

console.log(arguments[0]);
console.log(arguments[1].main.exports == arguments[0]);
/*console.log(arguments[0]);
console.log(arguments[1]);
console.log(arguments[2]);*/