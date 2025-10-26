const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

// GET todas las películas
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET película por ID
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: "Película no encontrada" });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST crear película
router.post("/", async (req, res) => {
  try {
    const movie = new Movie(req.body);
    const savedMovie = await movie.save();
    res.status(201).json(savedMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT actualizar película
router.put("/:id", async (req, res) => {
  try {
    const updated = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Película no encontrada" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE eliminar película
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Movie.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Película no encontrada" });
    res.json({ message: "Película eliminada" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
