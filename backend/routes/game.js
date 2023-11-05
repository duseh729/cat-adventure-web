const express = require("express");

const router = express.Router();

router.get("/escape", (req, res) => {
  res.render("game/Escape/index");
});

router.get("/quiz", (req, res, next) => {
  res.render("game/Quiz/index");
});

router.get("/tower-defence", (req, res, next) => {
  res.render("game/Tower-Defence/index");
});

router.get("/tekken", (req, res, next) => {
  res.render("game/Tekken/index");
});

router.get("/packman", (req, res, next) => {
  res.render("game/Packman/index");
});

// 유니티 게임에서 서버 통신
router.get("/test", (req, res, next) => {
  res.send("hello from server");
});
router.post("/test", (req, res, next) => {
  console.log(req.body);
});

module.exports = router;
