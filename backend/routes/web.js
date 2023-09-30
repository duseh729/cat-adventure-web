const express = require("express");

const router = express.Router();

const { Board } = require("../models/board");

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/board", (req, res) => {
  res.render("board");
});

router.get("/write", (req, res, next) => {
  res.render("write", { title: "write" });
});
router.post("/write", (req, res, next) => {
  const { userId, title, contents } = { ...req.body };
  Board.findWriteCount().then(write => {
    const totalPosts = write.totalPosts;
    if (totalPosts !== undefined) {
      const board = new Board(totalPosts + 1, userId, title, contents);

      board
        .save()
        .then(result => {
          console.log("Board saved: ", result);
          Board.increaseWriteCount();
          res.status(202).json({ message: "success" });
        })
        .catch(error => {
          console.error("Error saving board:", error);
          res.status(500).json({ message: "fail" });
        });
    } else {
      console.log("Write 콜렉션에 문제가 있어");
      res.status(500).json({ message: "오류가 있어" });
    }
  });
});

module.exports = router;
