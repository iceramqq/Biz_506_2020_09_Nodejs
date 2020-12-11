import express from "express";
const router = express.Router();
import request from "request";

import gjDataVO from "../models/GjStation.js";
import { PET_URL, DATA_GO_SEVICE_KEY } from "../modules/Data.go.kr.js";

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

router.get("/busstop/:busstop_id", async (req, res) => {
  const busstop_id = req.params.busstop_id;
  let queryString = GJ_BUS_ARRIVE_URL;
  queryString += `?serviceKey=${DATA_GO_SEVICE_KEY}`;
  queryString += `&BUSSTOP_ID=${busstop_id}`;
  const reqOPtion = {
    url: queryString,
    method: "GET",
  };

  await request(reqOPtion, (err, response, body) => {
    if (err) console.log(err);
    res.json(JSON.parse(body));
  });

  // {busstop_id: busstop_id}
  // res.json({ busstop_id });
});

export default router;
