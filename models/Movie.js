const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: Number,
  genre: String,
  director: String,
  poster: String,
  plot: String
});

module.exports = mongoose.model("Movie", movieSchema);
