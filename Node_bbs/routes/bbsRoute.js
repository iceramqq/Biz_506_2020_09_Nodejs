var express = require("express");
var router = express.Router();
/**
 * 현재까지 사용중인 프로그래밍 엄어에서 날짜, 시간과 관련하여
 * 수없이 많은 issue들이 있다.
 * js date라는 내장클래스가 있다.
 * 이 내장클래스도 이수가 있어서 실제로 db와 연동하여 사용할때
 * 문제들을 일으킨다
 * 그래서 내장 date 클래스가 있음에도 불구하고
 * nodejs 에서는 moment 외부모듈을 거의 표준적으로
 */
const moment = require("moment");

var bbsVO = require("../models/bbsModel");

// localhost:300/bbs/list url 접근했을때
router.get("/list", function (req, res) {
  bbsVO.find().then(function (bbsList) {
    res.render("bbsList", { bbsList });
  });
});

router.get("/write", function (req, res) {
  let data = new bbsVO();
  res.render("bbsWrite", { bbsVO: data });
});

router.post("/write", function (req, res) {
  // let b_title = req.body.b_title;
  // let b_write = req.body.b_write;
  // let b_text = req.body.b_text;

  req.body.b_date = moment(new Date()).format("YYYY-MM-DD");
  req.body.b_time = moment(new Date()).format("HH:mm:ss");
  req.body.b_count = 0;

  let data = new bbsVO(req.body);
  data
    .save()
    .then(function (bbsVO) {
      //res.json(bbsVO)
      res.redirect("/bbs/list");
    })
    .catch(function (error) {
      console.error(error);
    });

  // res.write(b_title);
  // res.write(b_write);
  // res.end(b_text);
  // res.json(body);
});

router.get("/view/:id", function (req, res) {
  let id = req.params.id;

  bbsVO
    .findOne({ _id: id })
    .then(function (result) {
      //res.json(result);
      res.render("bbsView", { bbsVO: result });
    })
    .catch(function (error) {
      console.error(error);
    });
  //res.send(id);
});

/**
 * 데이터를 삭제할때
 * mongodb 3.x 이하에서는 remove(조건문) 함수를 사용했다
 * 조건문 없이 remove()를 실행하면 테이블의 모든 데이터를 묻지도 따지지도 않고 삭제해버린다
 * mongodb 4.x 이상에서는 이러한 문제를
 */
router.get("/delete/:id", function (req, res) {
  let id = req.params.id;
  bbsVO
    .findOneAndDelete({ _id: id })
    .then(function (result) {
      //res.json(result);
      res.redirect("/bbs/list");
    })
    .catch(function (error) {
      console.error(error);
    });
});

router.get("/update/:id", function (req, res) {
  let id = req.params.id;
  bbsVO.findOne({ _id: id }).then(function (result) {
    res.render("bbsWrite", { bbsVO: result });
  });
});

/**
 * 한게의 item을 조회하여 write form으로 보낸후 데이터를 ㅏ다시 받앗을때
 * req.body에는 id이 사라진 상태로 전달된다.
 * 하지만 update를 수행할때 id값을 url에 전달하여 보냈기 때문에
 * for형태의 url이 자동으로 만들어지
 * 는 에 id 값을 받아소 수신하는 결과가 되다
 */
router.post("/update/:id", function (req, res) {
  let id = req.params.id;
  req.body._id = id;

  bbsVO
    .updateOne(
      { _id: id },
      {
        b_title: req.body.b_title,
        b_write: req.body.b_write,
        b_text: req.body.b_text,
      }
    )
    .then(function (result) {
      res.redirect("/bbs/list");
    });
});

module.exports = router;
