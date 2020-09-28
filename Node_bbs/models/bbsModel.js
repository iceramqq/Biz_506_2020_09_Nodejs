var mongoose = require("mongoose");

var schema = mongoose.Schema;

var todoVO = new schema({
  t_date: String,
  t_time: String,
  t_text: String,
});

module.exports = mongoose.model("tbl_todo", todoVO);
