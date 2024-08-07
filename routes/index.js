const express = require("express");
const router = express.Router();

const allBlogs = require("../controllers/blog/allBlogs");
const createGet = require("../controllers/blog/createGet");
const createPost = require("../controllers/blog/createPost");
const deleteGet = require("../controllers/blog/deleteGet");
const deletePost = require("../controllers/blog/deletePost");
const singleBlog = require("../controllers/blog/singleBlog");
const updateGet = require("../controllers/blog/updateGet");
const updatePost = require("../controllers/blog/updatePost");
const loginGet = require("../controllers/user/loginGet");
const loginPost = require("../controllers/user/loginPost");
const registerGet = require("../controllers/user/registerGet");
const registerPost = require("../controllers/user/registerPost");

router.get("/", allBlogs);
router.get("/blog/create", createGet);
router.post("/blog/create", createPost);
router.get("/blog/delete/:id", deleteGet);
router.post("/blog/delete/:id", deletePost);
router.get("/blog/:id", singleBlog);
router.get("/blog/update/:id", updateGet);
router.post("/blog/update/:id", updatePost);
router.get("/user/login", loginGet);
router.post("/user/login", loginPost);
router.get("/user/create", registerGet);
router.post("/user/create", registerPost);

module.exports = router;