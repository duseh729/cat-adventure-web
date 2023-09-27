const express = require("express");

const router = express.Router();

router.get("/escape", (req, res) => {
  res.render("game/Escape/index");
});

router.get("/quiz", (req, res, next) => {
  res.render("game/Quiz/index");
});

module.exports = router;
