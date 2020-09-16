var express = require("express");

var router = express.Router();

router.get("/",function(req,res){
    //res.send("home GET mapping")
    res.render("div");
});

router.post("/",function(req,res){
    res.send("home POST mapping");
});

//router.put()
//router.delete()

module.exports = router;