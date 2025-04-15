import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const baseUrl = process.env.NYT_BASEURL;
const apiKey = process.env.NYT_API_KEY;

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5000"],
    metthods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/api/articles", async (req, res) => {
  const { q } = req.query;
  const endpoint = `${baseUrl}?q=${q}&api-key=${apiKey}`;
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({ error: "Failed to fetch articles" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
