import express from "express";
const router = express.Router();
import request from "request";
import { PET_URL, DATA_GO_SEVICE_KEY } from "../modules/Data.go.kr.js";

router.get("/list", async (req, res) => {
  const search = req.params.search;
  let queryString = PET_URL;
  queryString += "/getDongMulHospital";
  queryString += `?serviceKey=${DATA_GO_SEVICE_KEY}`;
  queryString += "&pageNo=1";
  queryString += "&numOfRows=100";
  queryString += `&dongName=${search}`;

  const reqOPtion = {
    url: queryString,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  };

  await request(reqOPtion, (err, response, body) => {
    if (err) console.log(err);
    res.json(JSON.parse(body));
  });
});

export default router;
