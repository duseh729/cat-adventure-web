const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: String,
  userPw: String,
});

module.exports = mongoose.model("user", userSchema);
