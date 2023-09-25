const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/sub", (req, res) => {
  res.render("board");
});

module.exports = router;
