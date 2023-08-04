const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors"); // cors 라이브러리 import
const bodyParser = require("body-parser"); // body-parser 라이브러리 import
const port = process.env.PORT || 3000;

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
app.post("/login", (req, res) => {});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get;

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
