import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import artistsRouter from "./routes/artists.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/artists/:artistId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./public/artist.html"));
});

app.use("/artists", artistsRouter);

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.get("/all-artists", (req, res) => {
  res
    .status(200)
    .sendFile(path.resolve(__dirname, "./public/all-artists.html"));
});

app.use(express.static(path.join(__dirname, "./public")));

app.get("/404", (req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, "./public/404.html"));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🎵 Server listening on http://localhost:${PORT}`);
});
