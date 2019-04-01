require('dotenv').config();

const express = require ("express");
// const http = require ("http");
const bodyparser = require("body-parser");
// const adminRoute = require ("./routes/admin");

const path = require("path");

const app  = express();


app.set("view engine", "pug");

app.use(bodyparser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, "public")))

const adminData = require("./routes/admin");
const blogRoute = require("./routes/blog");

app.use('/admin', adminData.router);
app.use(blogRoute);   
   
app.use((req,res,next) => {
    res.send("<h1>404 not found</h1>")
   
})
app.listen(3000, ()=> console.log("server running on port 3000"));

// const server = http.createServer(app);

// server.listen(3000, ()=> console.log("server running on port 3000"));
