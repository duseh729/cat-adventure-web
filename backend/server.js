const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors"); // cors 라이브러리 import
const bodyParser = require("body-parser"); // body-parser 라이브러리 import

const { User } = require("./models/user");
const mongoConnect = require("./util/database").mongoConnect; // mongodb 데이터베이스

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
app.post("/login", (req, res) => {
  const { userId, userPw } = { ...req.body };
  console.log(userId, userPw);

  User.findById({ userId: userId })
    .then(user => {
      if (!user || user.password !== userPw) {
        return res.status(401).json({ message: "Invalid username or password." });
      }
      res.status(200).json({ message: "Login successful." });
    })
    .catch(error => {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Login failed." });
    });
});

app.get("/signup", (req, res) => {
  res.render("signup");
});
app.post("/signup", (req, res) => {
  const user = new User(req.body.userId, req.body.userPw);

  user
    .save()
    .then(result => {
      console.log("User saved:", result);
      res.status(201).json({ message: "User saved successfully!" });
    })
    .catch(error => {
      console.error("Error saving user:", error);
      res.status(500).json({ message: "User save failed." });
    });
});

mongoConnect(client => {
  app.listen(3000);
});
