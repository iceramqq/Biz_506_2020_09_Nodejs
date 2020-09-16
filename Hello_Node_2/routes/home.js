// express Router
// 1. express 프레임워크 import
var express = require("express");
// 2. express 프레임워크를 사용하여 router객체 생성
var router = express.Router();

router.get("/", function (req, res) {
  res.send("Home GET Mapping");
});

router.get("/my", function (req, res) {
  // res.send("My GET Mapping")
  res.render("home");
});

// router.get("/input/:nation",function(req, res){
//     let nation = req.params.nation
//     res.send(nation)
// })

// router.get("/input",function(req, res){
//     let nation = req.query.nation
//     res.send(nation)
// })

router.post("/input", function (req, res) {
  // res.send("INPUT POST Mapping")
  let m_user = req.body.m_user;
  // res.send("입력한 user : " + m_user)
  res.render("home", { m_user: m_user });
});

router.post("/", function (req, res) {
  res.send("Home POST Mapping");
});

router.get("/list", function (req, res) {
  let list = [];

  list.push({ name: "홍길동" });
  list.push({ name: "이몽룡" });
  list.push({ name: "성춘향" });
  list.push({ name: "장보고" });
  list.push({ name: "임꺽정" });

  res.render("list", { list: list });
});

module.exports = router;
