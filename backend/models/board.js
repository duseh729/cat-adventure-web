const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;
// const getNextSequence = require("../util/database").getNextSequence;

class Board {
  constructor(id, userId, title, contents) {
    // this._id = getNextSequence("userId");
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.contents = contents;
  }

  save() {
    const db = getDb();
    return db.collection("board").insertOne(this);
  }

  static findWriteCount() {
    const db = getDb();
    return db.collection("counter").findOne({ name: "총게시물개수" });
  }
  static increaseWriteCount() {
    const db = getDb();
    return db.collection("counter").updateOne({ name: "총게시물개수" }, { $inc: { totalPosts: 1 } });
  }
}

exports.Board = Board;
