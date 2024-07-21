const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
const session = require("express-session");
const router = require("./routes");
require("dotenv").config();


app.set("view engine", "ejs");
app.use("/public", express.static("public"));

// Session
app.use(session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 300000 },
}));

// Connecting to MongoDB
const databaseUrl = process.env.DATABASE_URL;
mongoose.connect(databaseUrl)
    .then(() => {
        console.log("Success: Connected to MongoDB");
    }).catch((error) => {
        console.log("Failure: Unconnected to MongoDB");
    });

app.use(router);


// Page NotFound
app.get("*", (req, res) => {
    res.render("error", { message: "ページが存在しません" });
});


// Connecting to port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});