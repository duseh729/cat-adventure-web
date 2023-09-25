const express = require("express");

const router = express.Router();

router.get("/escape", (req, res) => {
  res.render("game/Escape/index");
});

module.exports = router;
