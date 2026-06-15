import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import artistData from "../data/artists.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GET all artists JSON
router.get("/", (req, res) => {
  res.status(200).json(artistData);
});

// GET single artist JSON by ID
router.get("/api/:artistId", (req, res) => {
  const id = parseInt(req.params.artistId);
  const artist = artistData.find((a) => a.id === id);
  if (!artist) {
    res.status(404).json({ error: "Artist not found" });
  } else {
    res.status(200).json(artist);
  }
});

export default router;
