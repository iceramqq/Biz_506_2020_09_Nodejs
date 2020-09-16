var mongoose = require("mongoose");
const router = require("../routes");
/*
nosql인 mongodb를 rdbms처럼 사용하기위해서 schema를 생성
table구조를 
*/
var schema = mongoose.Schema;

// bbVO생성
// json 데이터수조로 bbsvo의  table를 생성하기 위한
var bbsVO = new schema({
  b_date: String,
  b_time: String,
  b_title: String,
  b_write: String,
  b_text: String,
  b_count: Number,
});

// mongoose의 model 함수를 사용하여
// tbk_bbs table을 만들고 그 구조를 bbsvo 에 선언된 형태로 만들겠다
// model을 다른 모듈에서 사용할수 있도록 export 한다.
// tbl_bbs라는 이름으로 table을 만들겠다
module.exports = mongoose.model("tbl_bbs", bbsVO);
