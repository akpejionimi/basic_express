const express = require("express");
const router = express.Router();
const path = require("path");

const postController = require("../controllers/posts")
const generalController = require("../controllers/general");

// app.set('views',path.join(__dirname, 'views'));

// const { posts } = require("./admin");

// router.get("/", (req, res, next) => {
//     // res.send("<h1>Welcome</h1>")
//     // res.sendFile(path.join(__dirname,"../", "views", "home.html" ))
//     res.render("blog", { pageTitle: "Home Page", allPosts: posts, path:"/"});
// });
router.get("/", postController.getPosts);
router.get("/posts/:id", postController.getPostById);
router.get("/about", generalController.getAboutUs);


module.exports = router;