var mongoose = require("mongoose");
module.exports ={
    public_op:["find", "update", "remove","save"],
    databaseurl:"mongodb://localhost/kuangliting",
    database_conf:{
        question: {
            schemal: {
                title: String,
                userid: mongoose.Schema.ObjectId,
                createAt: {
                    type: Date,
                    default: Date.now()
                },
                updateAt: {type: Date, default: Date.now()},
                content: String,
                answer: Array,
                read:Number,
                users:Array,
                isreaded:Boolean,
                issolved:Boolean
            }
        },
        user: {
            schemal: {username: String, password: String, age: Number}
        },
        theme: {
            schemal: {themename: String}
        },
        student:{
            schemal:{
                name:String,
                number:Number,
                gender:String,
                address:String
            }
        },
        color:{
            schemal:{
                value:String,
                text:String
            }
        }
    }
}