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
    res.sendFile(path.join(__dirname + "/views/book1.html"))
});
router.get("/images/2", function(req,res) {
    res.sendFile(path.join(__dirname + "/views/book2.html"))
});
router.get("/images/3", function(req,res) {
    res.sendFile(path.join(__dirname + "/views/book3.html"))
});

module.exports = router;

app.use("/",router);