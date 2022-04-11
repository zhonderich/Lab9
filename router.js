const express = require("express");
app = express();
path = require("path");
router = express.Router();

app.use(express.static("views"))
app.use(express.static(__dirname+"public"))
app.use(express.static(__dirname+"css"))


router.get("/home", function(req,res) {
    res.sendFile(path.join(__dirname + "/views/index.html"))
});
router.get("/images/1", function(req,res) {
    res.sendFile(path.join(__dirname + "/public/images/book1.jpg"))
});
router.get("/images/2", function(req,res) {
    res.sendFile(path.join(__dirname + "/public/images/book2.jpg"))
});
router.get("/images/3", function(req,res) {
    res.sendFile(path.join(__dirname + "/public/images/book3.jpg"))
});

module.exports = router;

app.use("/",router);