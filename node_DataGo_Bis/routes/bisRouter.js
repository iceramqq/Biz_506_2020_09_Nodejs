import express from "express";
const router = express.Router();

import gjDataVO from "../models/GjStation.js";

router.get("/", (req, res) => {
  console.log("bis root req");
  // tbl_gjbus에서 전체데이터를 가져와서 보여라
  gjDataVO
    .find({})
    .sort({ BUSSTOP_NAME: 1 })
    .exec((err, data) => {
      res.render("bis_view", { station_list: data });
    });
});

router.get("/station", (req, res) => {
  const station = req.query.station;

  // tbl_gjbus에서 전체데이터를 가져와서 보여라
  gjDataVO
    // busstop_name 칼럼에 station 변수에 담긴 문자열이
    //
    //
    //
    .find({ BUSSTOP_NAME: RegExp(station, "ig") })
    .sort({ BUSSTOP_NAME: 1 })
    .exec((err, data) => {
      res.render("bis_view", { station_list: data });
    });
});

export default router;
