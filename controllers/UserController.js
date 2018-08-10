const baseController = require("./BaseController");
const userModel = require("../models/userModel");


class UserController extends baseController {
    register(params) {
        return new Promise((resolve, reject) => {
            userModel.create(params).then((res) => {
                resolve(res)
            })
        })
    }
    findAll() {
        return new Promise((resolve, reject) => {
            userModel.find().then((res) => {
                resolve(res)
            })
        })
    }
    empty() {
        return new Promise((resolve, reject) => {
            userModel.remove().then(res => {
                resolve(res)
            })
        })
    }
    login(params) {
        return new Promise((resolve, reject) => {
            userModel.find(params).then(res => {
                resolve(res)

            })
        })
    }
}

var user = new UserController();


function router(app) {
    app.post("/login", function(req, res) {
        userModel.find({ name: req.body.name, password: req.body.password }).then(resp => {
            if (resp.length == 1) {
                res.json({ flag: 1, info: "login success" })
            } else {
                res.json({ flag: 0, info: "login fail" })
            }

        })
    })
    app.post("/register", function(req, res) {
        userModel.create({ name: req.body.name, password: req.body.password }).then((resp) => {
            //console.log(resp);
            res.json(resp);
        })
    })

}

module.exports = router;