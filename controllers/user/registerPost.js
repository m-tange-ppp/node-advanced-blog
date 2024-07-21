const UserModel = require("../../models/user");

module.exports = (req, res) => {
    UserModel.create(req.body)
        .then(() => {
            res.redirect("/");
        })
        .catch((error) => {
            res.render("error", { message: "/user/createのエラー" });
        })
};