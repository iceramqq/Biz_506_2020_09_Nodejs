import mongoose from "mongoose";
const petSchema = mongoose.Schema({
  apiSid: String,
  apiDongName: String,
  apiNewAddress: String,
  apiOldAddress: String,
  apiTel: String,
});

export default mongoose.model("tbl_hosp", petSchema);
