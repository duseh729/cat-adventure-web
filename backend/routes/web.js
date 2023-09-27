const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/board", (req, res) => {
  res.render("board");
});

router.get("/write", (req, res, next) => {
  console.log("요청옴");
  res.render("write", { title: "write" });
});

module.exports = router;
