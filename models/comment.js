const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = Comment = mongoose.model("comment", CommentSchema);