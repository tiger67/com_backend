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
var blog = new Blog({
    title: "每天怎样做，会不断积累正能量",
    anthor: "小米花",
    body: ` <h2>IEURIE唯一日为一日U币决定恢复阶段是f</h2><p>dsaluioeuieyiu
    dfldsfjklsdfjkdshfjkd fdf看到了司法考试的回复范德萨官方介绍的股份法国第三发的规范合格放大后发放
    答复哈萨克的金凤凰就开始对方就暗示富家大室防守打法</p>`,
    hidden: false,
    //date: new Date(),
    meta: {
        votes: 0,
        faver: 0
    }
})

//blog.save();
/*blog.save();
Blog.find().then((res) => {
    console.log(res[0].date instanceof Date);
    console.log(res[0].hidden === false);
})*/



/*Blog.find().then((res) => {
    console.log(res[0].date.toLocaleString());
    console.log(res[0].hidden === false);
    var item = res[0];
    Blog.update(item, {
        title: "更新以后！！11",
        meta: {
            votes: item.meta.votes + 1,
            faver: item.meta.faver + 1
        }
    }).then((res) => {
        console.log(res);
         Blog.find().then((res) => {
            console.log(res);
        })
    })
})
*/
/*Blog.find().then((res) => {
    console.log(res[0].date.toLocaleString());
    console.log(res[0].hidden === false);
    var item = res[0];
    Blog.update({ _id: item._id }, {
        title: "更新以后！！idddd",
        meta: {
            votes: item.meta.votes + 1,
            faver: item.meta.faver + 1
        }
    }).then((res) => {
        console.log(res);
        Blog.find().then((res) => {
            console.log(res);
        })
    })
})*/
/*blog.save().then((res) => {
    console.log(res);
    Blog.find().then((res) => {
        console.log(res);
    })
});*/
/*Blog.find().then((res) => {
    var item = res[res.length - 1];
    Blog.remove({ title: '每天怎样做，会不断积累正能量' }).then((res) => {
        console.log(res)
        Blog.find().then((res) => {
            console.log(res);
        })
    })
})*/
/*Blog.remove({ meta: { votes: 0, faver: 0 } }).then((res) => {
    console.log(res)
    Blog.find().then((res) => {
        console.log(res);
    })
})*/
Blog.create({
    title: "777777777777",
    anthor: "小米花",
    body: ` <h2>IEURIE唯一日为一日U币决定恢复阶段是f</h2><p>dsaluioeuieyiu
    dfldsfjklsdfjkdshfjkd fdf看到了司法考试的回复范德萨官方介绍的股份法国第三发的规范合格放大后发放
    答复哈萨克的金凤凰就开始对方就暗示富家大室防守打法</p>`,
    hidden: false,
    //date: new Date(),
    meta: {
        votes: 0,
        faver: 0
    }
}).then((res) => {
    //console.log(res)
    Blog.find().then((res) => {
        console.log(res);
    })
})

console.log(new Date().toLocaleString())