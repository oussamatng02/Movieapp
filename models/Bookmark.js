const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: "Movie", required: true }
});

module.exports = mongoose.model("Bookmark", bookmarkSchema);
