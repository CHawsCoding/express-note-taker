const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON data
app.use(express.json());
// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));
// Middleware for serving static files
app.use(express.static("public"));

// API Routes
app.get("/api/notes", (req, res) => {
  // Read the notes from the db.json file
  const notes = JSON.parse(fs.readFileSync("db/db.json", "utf8"));

  // Send the notes as a response
  res.json(notes);
});

app.post("/api/notes", (req, res) => {
  // Read the notes from the db.json file
  const notes = JSON.parse(fs.readFileSync("db/db.json", "utf8"));

  // Generate a new note object
  const newNote = {
    id: notes.length + 1,
    title: req.body.title,
    text: req.body.text,
  };

  // Add the new note to the notes array
  notes.push(newNote);

  // Write the updated notes to the db.json file
  fs.writeFileSync("db/db.json", JSON.stringify(notes));

  // Send a success response
  res.sendStatus(200);
});

app.delete("/api/notes/:id", (req, res) => {
  // Read the notes from the db.json file
  const notes = JSON.parse(fs.readFileSync("db/db.json", "utf8"));

  // Find the index of the note to be deleted
  const index = notes.findIndex((note) => note.id === parseInt(req.params.id));

  // Remove the note from the notes array
  notes.splice(index, 1);

  // Write the updated notes to the db.json file
  fs.writeFileSync("db/db.json", JSON.stringify(notes));

  // Send a success response
  res.sendStatus(200);
});

// HTML Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
