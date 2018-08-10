const mongoose = require("../config/database");


const userSchemal = mongoose.Schema({
   /* telephone: {
     type: String,
     unique: true
 },*/
    name: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
})
var User = mongoose.model("user", userSchemal, "users");

module.exports = User;