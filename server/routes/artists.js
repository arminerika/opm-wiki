import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import ArtistsController from "../controllers/artists.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", ArtistsController.getArtists);
router.get("/api/:artistId", ArtistsController.getArtist);

export default router;
