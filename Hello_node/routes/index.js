/**
 * router : 경로설정
 * spring : controller 클래스로 선언
 * spring에서 controller가 하는일과 유샇나 기능을 수행한다
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
// localhost:3000/ 를 GET방식으로 요청을 하면
// function 함수를 실행하라
// router.get콜백함수, 함수
// functionfunction(req, res) { }
// req : client가 요청하는 여러가지 정보를 담
//    서버에 전달해주는 역할 수행
// res : 서버가 client에게 응답하는 것들이 담겨있다
router.get('/', function(req, res, next) {
  res.render('index', { title: '대한민국' });
});

router.get("/home/index",function(req, res){
  res.send("우리나라 만세")
});

router.get("/add",function(req, res){

  let num1 = parseInt(req.query.num1) || 30
  let num2 = parseInt(req.query.num2) || 40

  let sum=num1+num2;
  res.send(sum +"");
});

router.get("/add/:num1/:num2", function(req, res){
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);

  let sum = num1 + num2;
  res.send(sum + "");
});

router.post("/input",function(req,res){
  let m_user = req.body.m_user
  res.send("전송된 user : "+ m_user)
})

module.exports = router;
