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

module.exports = router;
