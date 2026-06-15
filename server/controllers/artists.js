import { pool } from "../config/database.js";

const getArtists = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM artists ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getArtist = async (req, res) => {
  try {
    const { artistId } = req.params;
    const results = await pool.query("SELECT * FROM artists WHERE id = $1", [
      artistId,
    ]);
    if (results.rows.length === 0) {
      res.status(404).json({ error: "Artist not found" });
    } else {
      res.status(200).json(results.rows[0]);
    }
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default { getArtists, getArtist };
