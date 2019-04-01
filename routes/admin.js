const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const postsController = require("../controllers/posts");

const posts = [];

router.get("/admin", postsController.getAddPost);
// router.get("/admin", (req,res,next) => {

//     res.render("admin", { pageTitle: "Add Post", path:"/admin/admin" });
// });



router.post("/create", postsController.postAddPost);
// router.post("/create",(req,res,next)=> {
//     detail = "\n" + req.body.title;

//     fs.appendFile("detail.txt", detail, (err) => {
//         if (!err) {
//             console.log("Done Writing");
//             res.redirect("/");
//         }
//     })

//     // res.send("Submitted succesfully");
//     console.log(req.body.title);

//     // res.redirect("/");
    // posts.push({title: req.body.title})

// })


// module.exports = router;
module.exports = {
    router,
    posts
}