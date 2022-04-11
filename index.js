const port = 3000;
const express = require("express");
const path = require("path");
const routes = require("./router.js");
const app = express();

app.set("views", path.join(__dirname,"html"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static(path.join(__dirname,"node_modules")));


app.use("/",routes)

app.listen(port, () => {
    console.log("im listening")
})
