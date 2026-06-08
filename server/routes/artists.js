import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import artistData from "../data/artists.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
  res.status(200).json(artistData);
});

router.get("/:artistId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/artist.html"));
});

export default router;
