var user = require("../controllers/UserController");

function build(app) {
    user(app);
}
module.exports = build;