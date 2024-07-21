const UserModel = require("../../models/user");

module.exports = (req, res) => {
    UserModel.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                // ユーザーが存在しない場合の処理
                res.render("error", { message: "/user/loginのエラー:ユーザーが存在しません" });
            } else {
                // ユーザーが存在した場合の処理
                if (req.body.password === user.password) {
                    // パスワードが正しい場合の処理
                    req.session.userId = user._id;
                    res.redirect("/");
                } else {
                    // パスワードが違う場合の処理
                    res.render("error", { message: "/user/loginのエラー:パスワードが違います" });
                }
            }
        })
        .catch(error => {
            res.render("error", { message: "/user/loginのエラー" });
        });
};
