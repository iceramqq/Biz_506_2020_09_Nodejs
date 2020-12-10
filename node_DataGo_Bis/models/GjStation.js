/**
 * mongodb를 orm방식으로 사용하기 위한 schema 선언
 */
import mongoose from "mongoose";
const gjSchema = mongoose.Schema({
  STATION_NUM: String,
  BUSSTOP_ID: String,
  BUSSTOP_NAME: String,
  NAME_E: String,
  NEXT_BUSSTOP: String,
});

export default mongoose.model("tbl_gjbus", gjSchema);
