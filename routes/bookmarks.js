const express = require("express");
const router = express.Router();
const Bookmark = require("../models/Bookmark");

// GET favoritos de un usuario
router.get("/:userId", async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({ userId: req.params.userId }).populate("movieId");
    res.json(bookmarks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST añadir favorito
router.post("/", async (req, res) => {
  try {
    const { userId, movieId } = req.body;
    const bookmark = new Bookmark({ userId, movieId });
    const saved = await bookmark.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE eliminar favorito
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Bookmark.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Favorito no encontrado" });
    res.json({ message: "Favorito eliminado" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
