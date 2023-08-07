const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors"); // cors 라이브러리 import
const bodyParser = require("body-parser"); // body-parser 라이브러리 import
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;
const User = require("./models/user");

const db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => {
  console.log("connected to mongod server");
});

mongoose.connect("mongodb+srv://dks729927:dks729927@cluster0.x0xx2st.mongodb.net/");

app.use(cors()); // cors 사용
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../frontend/public"))); // https://despiteallthat.tistory.com/151 <- 블로그 참고

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frontend"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", (req, res) => {
  const user = new User();
  user.userId = req.body.userId;
  user.userPw = req.body.userPw;

  user
    .save()
    .then(() => {
      res.json({ result: 1 });
    })
    .catch(err => {
      console.error(err);
      res.json({ result: 0 });
    });
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get;

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
