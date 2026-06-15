import { pool } from "./database.js";
import "./dotenv.js";
import artistData from "../data/artists.js";

const createArtistsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS artists;

    CREATE TABLE IF NOT EXISTS artists (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      genre VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      formed INTEGER NOT NULL,
      origin VARCHAR(255) NOT NULL,
      label VARCHAR(255) NOT NULL,
      spotifyUrl VARCHAR(255),
      websiteUrl VARCHAR(255),
      description TEXT NOT NULL,
      submittedBy VARCHAR(255) NOT NULL,
      submittedOn TIMESTAMP NOT NULL
    )
  `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎵 artists table created successfully");
  } catch (err) {
    console.error("⚠️ error creating artists table", err);
  }
};

const seedArtistsTable = async () => {
  await createArtistsTable();

  artistData.forEach((artist) => {
    const insertQuery = {
      text: "INSERT INTO artists (name, genre, image, formed, origin, label, spotifyUrl, websiteUrl, description, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
    };

    const values = [
      artist.name,
      artist.genre,
      artist.image,
      artist.formed,
      artist.origin,
      artist.label,
      artist.spotifyUrl,
      artist.websiteUrl,
      artist.description,
      artist.submittedBy,
      artist.submittedOn,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting artist", err);
        return;
      }
      console.log(`✅ ${artist.name} added successfully`);
    });
  });
};

seedArtistsTable();
